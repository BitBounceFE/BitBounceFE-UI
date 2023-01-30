/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: XinyueShu xshuac@connect.hk.ust
 * @LastEditTime: 2023-01-29 21:53:24
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\card\src\card.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, computed,  ref, toRefs, watch, onMounted, effect } from 'vue';
import { cardProps, CardProps } from './card-types';
import { ProgressProps,progressProps } from './progress-types';
import './progress.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'CProgress',
  props: progressProps,
  setup(props: ProgressProps, { slots }) {
    const ns = useNamespace('progress');

    // ccui-card ccui-card__nse ccui-card--nsm ccui-card__em--open
    console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

    const shapeClass = `${ns.b()} ${ns.m(props.type)}-shape`;

    console.log(shapeClass);
    // const isHeader = computed(() => {
    //   return props.header || slots.header;
    // });
    const isLine =  props.type === "line" ? true: false;
    const isCircle =  props.type === "Circle" ? true: false;
    const isDashboard = props.type === "dashboard"?true:false;


    //console.log(percentage,props.type==="Circle");

    console.log(props.percentage)
    const radius = 80;
    const strokeWidth = props.strokeWidth;
    const halfCircle = radius + strokeWidth;
    const percentage = ref(props.percentage);

    var coefficient = 1;
    var rotation = 90;
    var translateY = radius + strokeWidth;
    // var percentage = props.percentage;

    if(isDashboard){
      coefficient = 0.7;
      rotation = 90 + 180 * 0.7;
      translateY += strokeWidth;
    }
    const circumference = 2 * Math.PI * radius;
    var progressVal = circumference - (circumference *percentage.value)/100;
    var dashboardVal = circumference*0.3+circumference*((100 - percentage.value)/100)*0.7;
    // console.log( 2 * Math.PI * radius," ",circumference,val);
    effect(() => {
      percentage.value = props.percentage;
      progressVal = circumference - (circumference * percentage.value)/100;
      dashboardVal = circumference*0.3+circumference*((100 - percentage.value)/100)*0.7
    });

    console.log(translateY)


    return () => (
      // <div>
      //   <div class={ns.m('header')} v-show={isHeader}>
      //     {(slots.header && slots.header()) || props.header}
      //   </div>
      //   <div class={ns.m('body')} style={props.bodyStyle}>
      //     {slots.default && slots.default()}
      //   </div>
      // </div>
      <div>
        <div class={shapeClass} v-show={isLine} style={{height:`${props.strokeWidth}px`, backgroundColor:props.defineBackColor}}>
          <div style={{width:`${percentage.value}%`, 
              backgroundColor:`${props.color}`,
              height:`${props.strokeWidth}px`,
              borderRadius:"10px"}}>
          </div>
          <div v-show={!props.textInside && props.showText} style={{marginLeft:"102.5%",color:props.textColor,marginTop:`-${strokeWidth}px`}}>{percentage.value}%</div>
          <div v-show={props.textInside && props.showText} style={{marginLeft:`${percentage.value-10}%`,fontSize:`${strokeWidth/2}px`,color:props.textColor,marginTop:`-${strokeWidth}px`}}>{percentage.value}%</div>
        </div>
        <div class={shapeClass} v-show={isCircle} style={{width:props.width,height:props.width}}>
          <svg height={radius*2} width={radius*2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`} class="mask" style={{transform:`rotate(-${rotation}deg)`}}>
            <g origin={`${halfCircle}, ${halfCircle}`}>
            <circle fill='transparent' 
                    r={radius}
                    stroke-width={strokeWidth} 
                    stroke={props.defineBackColor}
                    stroke-linecap={props.strokeLinecap}
                    stroke-dasharray={circumference}
                    cx="50%" 
                    cy="50%">
            </circle>
            <circle fill='transparent' 
                    r={radius}
                    stroke-width={strokeWidth} 
                    stroke={"yellow"} 
                    cx="50%" 
                    cy="50%"
                    stroke-dashoffset={progressVal}
                    stroke-linejoin='round'
                    stroke-linecap={props.strokeLinecap}
                    stroke-dasharray={circumference}
                    >
            </circle>
            </g>
          </svg>
          <div v-show={props.showText} style={{color:props.textColor,fontSize:`${radius/4}px`,marginLeft:`${radius-radius/4}px`,
          position:"inherit",textAnchor:"middle",alignSelf:"center",transform: `translate(0%, -${translateY}px)`}}>
            {percentage.value}%
          </div>
        </div>

        <div v-show={isDashboard} style={{width:props.width,height:props.width}}>
          <svg height={radius*2} width={radius*2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`} class={shapeClass}>
            <g origin={`${halfCircle}, ${halfCircle}`}>
            <circle fill='transparent' 
                    r={radius}
                    stroke-width={strokeWidth} 
                    stroke={props.defineBackColor}
                    stroke-linecap={props.strokeLinecap}
                    stroke-dashoffset={circumference*0.3}
                    stroke-dasharray={circumference}
                    cx="50%" 
                    cy="50%">
            </circle>
            <circle fill='transparent' 
                    r={radius}
                    stroke-width={strokeWidth} 
                    stroke={"yellow"} 
                    cx="50%" 
                    cy="50%"
                    //stroke-dashoffset={val+circumference*0.1*0.7}
                    stroke-dashoffset={dashboardVal}
                    stroke-linejoin='round'
                    stroke-linecap={props.strokeLinecap}
                    stroke-dasharray={circumference}
                    >
            </circle>
            </g>
          </svg>
          <div v-show={props.showText} style={{color:props.textColor,fontSize:`${radius/4}px`,marginLeft:`${radius-radius/4}px`,
          position:"inherit",textAnchor:"middle",alignSelf:"center",transform: `translate(0%, -${translateY}px)`}}>
            {props.percentage}%
          </div>
        </div>


      </div>


    );
  }
});