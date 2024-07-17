const getPasslinkUrl = (): string => {
    if (process.env.phase === 'production') {
        return 'https://passorder.kr';
    } else if (process.env.phase === 'staging') {
        return 'https://stg.passorder.kr';
    } else {
        return 'https://dev.passorder.kr';
    }
};

export { getPasslinkUrl };
