import { orderBy } from 'lodash';

export default function LoadashPage() {
    let list = [
        { name: "ffffff", address: "aaaaaaaa", },
        { name: "abfasfasdf", phone: "0101234123", address: "asdlfhajsdifjasdlf", },
        { name: "basdfpa", address: "asdlfhajsdifjasdlf", },
        { name: "addadlasfd", phone: "0101234123", address: "mmjiojadsif", },
        { name: "basdfpa", phone: '0101234', address: "asdlfhajsdifjasdlf", },
        { name: "addadlasfd", phone: "0101234123", address: "ammjiojadsif", },
        { name: "addadlasfd", phone: "0101111111", },
        { name: "ffffff", address: "aaaaaaab", },
        { address: "mmjiojadsif", },
        { address: "aaaaammjiojadsif", },
        { phone: "01231231", address: "aaaaammjiojadsif", },
    ];

    for (let index = 0; index < 3; index++) {
        list = [...list, ...list];
    }

    return <div>
        lodash
        <div>
            {/* {list.sort((a: any, b: any) => {
                const compare = (params: any[], index = 0): number => {
                    const param = params[index];
                    if (!param) {
                        return 0;
                    }
                    if (a[param] && b[param]) {
                        if (a[param] > b[param]) {
                            return 1;
                        } else if (a[param] < b[param]) {
                            return -1;
                        }
                    }
                    if (a[param] && !b[param]) {
                        return 1;
                    }
                    if (!a[param] && b[param]) {
                        return 1;
                    }
                    return compare(params, index + 1);
                };
                return compare(["name", "phone", "address"]);
            }).map((item, index) => {
                return <div key={index} style={{ display: 'flex', gap: '10px' }} >
                    <span>name : {item.name}</span>
                    <span>phone : {item.phone}</span>
                    <span>address : {item.address}</span>
                </div>
            })} */}
            {/* {list.sort((a: any, b: any) => {
                const compare = (param: any) => {
                    // return a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0;
                    return +(a[param] > b[param]) || +(a[param] === b[param]) - 1;
                };
                return compare("name") || compare("phone") || compare("address") || 0;
            }).map((item, index) => {
                return <div key={index} style={{ display: 'flex', gap: '10px' }} >
                    <span>name : {item.name}</span>
                    <span>phone : {item.phone}</span>
                    <span>address : {item.address}</span>
                </div>
            })} */}
            {/* {orderBy(list, ['name', 'phone', 'address'], ['asc', 'asc', 'asc']).map((item, index) => {
                return <div key={index} style={{ display: 'flex', gap: '10px' }} >
                    <span>name : {item.name}</span>
                    <span>phone : {item.phone}</span>
                    <span>address : {item.address}</span>
                </div>
            })} */}
        </div>
    </div>
}