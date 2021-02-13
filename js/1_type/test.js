function getElementIdData(data, element_id, fn) {
  for (let i = 0; i < data.length; i++) {
    if (element_id === data[i].element_id) {
      fn(data[i]);
      break;
    }
  }
}

let data = [
  {
    field: "liveme_ads_algorithm_idv_experiment_effact_algo_type.area",
    element_id: "1e85ab77-b16e-4b03-a5b8-aae207995a50"
  },
  {
    field: "liveme_ads_algorithm_idv_experiment_effact_algo_type.experiment",
    element_id: "3bba9734-d5f5-45a3-ad9e-7606fd7c9a7d"
  },
  {
    field: "liveme_ads_algorithm_idv_experiment_effact_algo_type.idv_prodid",
    element_id: "82297eb6-3d62-4f79-b21a-d554abb5c934"
  },
  {
    field: "liveme_ads_algorithm_idv_experiment_effact_algo_type.idv_pageid",
    element_id: "910c4bd4-7717-4924-8d51-b23ebb60e6af"
  },
  {
    field:
      "liveme_ads_algorithm_idv_experiment_effact_algo_type.algo_type_td_001",
    element_id: "77b81b40-b0c8-441f-b4cf-d9c446fc5889"
  },
  {
    field: "liveme_ads_algorithm_idv_experiment_effact_algo_type.dt",
    element_id: "a15ac66d-8cc1-4812-9b9d-7e56eebffdae"
  }
];

const element_id = "3bba9734-d5f5-45a3-ad9e-7606fd7c9a7d";

getElementIdData(data, element_id, (d) => {
  d.field = 'test';
})
console.log(data);