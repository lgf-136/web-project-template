import { MockMethod } from 'vite-plugin-mock';
import mockjs from 'mockjs';

const userList = mockjs.mock({
  'users|100': [
    {
      'id|+1': 1,
      name: '@cname',
      date: '@date',
      time: '@time',
    },
  ],
});
export default [
  {
    url: '/api/users',
    method: 'get',
    response: () => ({
      code: 200,
      message: 'ok',
      data: userList,
    }),
  },
] as MockMethod[];
