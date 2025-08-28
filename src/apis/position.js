import { https } from "./config";

export const fetchPositionApi = async (page, limit) => {
  return await https({
    url: `/vi-tri/phan-trang-tim-kiem`,
    method: "GET",
    params: {
      ...(page && { pageIndex: page }),
      ...(limit && { pageSize: limit }),
    },
  });
};
