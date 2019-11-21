const getPaginateOptions = (page, pageSize) => {
    if (page <= 1) { page = 0 }
    if (page > 1) { page-- }
    const offset = page * pageSize;
    const limit = pageSize;
    return {
        offset,
        limit
    };
};

const getPaginatedResult = (data, count, page, limit) => {
    let result = {};
    result.docs = data;
    result.total = count;
    result.currentPage = page;
    result.perPage = limit;
    result.lastPage = Math.max(parseInt(Math.ceil(result.total / limit)), 1);
    result.hasMorePages = result.currentPage < result.lastPage ? true : false;
    result.nextPage = result.currentPage < result.lastPage ? result.currentPage + 1 : 0;
    result.previousPage = result.currentPage > 1 ? result.currentPage - 1 : 0;
    return result
}

module.exports = {
    getPaginateOptions,
    getPaginatedResult
}