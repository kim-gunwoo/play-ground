"use client";

import { useCallback, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

interface ResultType {
  x: string;
  y: string;
  address_name: string;
}

const keys = {
  juso: "",
  authorization: "",
};

export default function JusoExcel() {
  const [uploadData, setUploadData] = useState<any>();

  const test = [
    { name: "1", addr: "서울시 삼성로" },
    { name: "2", addr: "수원시 호매실동" },
    { name: "3", addr: "서울시 삼성로" },
  ];

  const searchFetch = useCallback(async (addr: string): Promise<ResultType> => {
    const res = await axios.get(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${keys.juso}%3D&keyword=${addr}&currentPage=1&countPerPage=50&resultType=json`
    );

    const { juso } = res.data.results;

    console.log(juso[0].zipNo);
    console.log(juso[0].roadAddr);

    const result = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${juso[0].roadAddr}&page=1&size=1`,
      {
        headers: {
          authorization: keys.authorization,
        },
      }
    );

    const { x, y, address_name } = result.data.documents[0];

    return { x, y, address_name };
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        const wb = XLSX.read(fileData, { type: "binary" });

        const sheetNameList = wb.SheetNames;
        const sheetName = sheetNameList[0];
        const sheet = wb.Sheets[sheetName];
        const records = XLSX.utils.sheet_to_json(sheet, { raw: false });
        setUploadData(records);
      };
      reader.readAsBinaryString(files[0]);
    }
  }, []);

  useEffect(() => {
    if (test.length > 0) {
      // return;
    }

    const fetchArr: Promise<ResultType>[] = [];
    test.forEach((item) => {
      fetchArr.push(searchFetch(item.addr));
    }, []);

    Promise.allSettled(fetchArr).then(
      (res: PromiseSettledResult<ResultType>[]) => {
        const result = test.map((item, index) => {
          console.log(res);

          if (res[index].status === "fulfilled") {
            const { value } = res[index] as PromiseFulfilledResult<ResultType>;

            return {
              ...item,
              x: value.x,
              y: value.y,
            };
          }
          return {
            ...item,
          };
        });
        console.log(result);
      }
    );
    // searchFetch()
  }, []);

  return (
    <div>
      <input type={"file"} onChange={onChange} />

      <br />
    </div>
  );
}
