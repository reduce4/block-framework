import { useEffect } from "react"
import { fromJS } from 'immutable'

export default function () {
  useEffect(() => {
    const obj = {
      name: 'abc',
      plugins: ['p1', 'p2', 'p3'],
      ccc: {
        ddd: {
          a: 1
        }
      }
    };


    const c = fromJS(obj);
    const p = new Proxy(obj, {
      get: function (obj, prop) {
        console.log(`获取 ${prop} 属性`);
        return obj[prop];
      },
      set: function (obj, prop, value) {
        console.log(`设置 ${prop} 属性为`, value);
        obj[prop] = value;
        return true;
      },
    });

    // p.name = { a: 1 }
    p.ccc.ddd.a = 'adsfas'


  }, [])
  return <></>
}