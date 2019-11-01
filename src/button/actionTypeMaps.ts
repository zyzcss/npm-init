declare type Item = {
  text: string;
  defaultType?: 'ghost' | 'link' | 'default' | 'primary' | 'dashed' | 'danger';
  color: string;
  borderColor: string;
  iconCode: string;
};

const addAction: Item = {
  text: '新增',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe602;',
};

const deleteAction: Item = {
  text: '删除',
  defaultType: 'default',
  color: '#F5222D',
  borderColor: '#F5222D',
  iconCode: '&#xe608;',
};

const importAction: Item = {
  text: '导入',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe608;',
};

const exportAction: Item = {
  text: '导出',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe608;',
};

const downloadAction: Item = {
  text: '下载',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe608;',
};

const createAction: Item = {
  text: '生成',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe608;',
};

const refreshAction: Item = {
  text: '刷新',
  defaultType: 'default',
  color: 'rgba(47,84,235,1)',
  borderColor: 'rgba(47,84,235,1)',
  iconCode: '&#xe608;',
};

const actionmaps = {
  add: addAction,
  delete: deleteAction,
  import: importAction,
  export: exportAction,
  download: downloadAction,
  create: createAction,
  refresh: refreshAction,
};
export default actionmaps;
