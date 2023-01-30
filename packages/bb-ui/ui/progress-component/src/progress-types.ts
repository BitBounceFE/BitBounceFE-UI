/*
 * @Author: XinyueShu xshuac@connect.hk.ust
 * @Date: 2023-01-23 16:45:22
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-01-27 01:20:35
 * @FilePath: /project/BitBounceFE-UI/packages/bb-ui/ui/progress-component/src/progress-types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { PropType, ExtractPropTypes } from 'vue';

type shapeType = PropType<'line' | 'Circle' | 'dashboard'>;
type linecapType = PropType<'round' | 'butt' | 'square'>;
type statusType =  PropType<'success' | 'exception' | 'warning'>;

export const progressProps = {
  percentage:{
    type: Number,
    default: 0,
    required: true,
  },
  type:{
    type: String as shapeType,
    default: 'line',
  },
  strokeWidth:{
    type: Number,
    default:6,
  },
  textInside:{
    //only valid for progress bar/line
    //! missing validator function
    type: Boolean,
    default:false,
  },
  status:{
    type: String as statusType,
    default: '',
  },
  color:{
    type: String,Function,Array,
    default:"rgb(52,137,255)",
  },
  width:{
    //only valid for circle and dashboard
    //!missig validator function
    type: Number,
    default:126,
  },
  showText:{
    type: Boolean,
    default: true,
  },
  strokeLinecap:{
    type: String as linecapType,
    default: 'round',
  },
  format:{
    type: Function,
    default() {
      return 'Default function'
    }
  },
  // bodyStyle: {
  //   type: Object,
  //   default: () => {
  //     return { padding: '20px' };
  //   }
  // },
  defineBackColor:{
    type: String,
    default:"#eee"
  },
  textColor: {
    type: String,
    default: 'black',
  },
} as const;

// 获取 props 类型
export type ProgressProps = ExtractPropTypes<typeof progressProps>;