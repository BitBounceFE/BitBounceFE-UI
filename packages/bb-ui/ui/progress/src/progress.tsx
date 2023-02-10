/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2023-01-16 21:13:04
 * @LastEditors: Xia Yuang xiayuang@foxmail.com
 * @LastEditTime: 2023-02-02 18:18:33
 * @FilePath: \BitBounceFE-UI\packages\bb-ui\ui\progress\src\progress.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref, effect } from 'vue';

import { useNamespace } from '../../shared/hooks/use-namespace';

import { ProgressProps, progressProps } from './progress-types';
import './progress.scss';

export default defineComponent({
  name: 'CProgress',
  props: progressProps,
  setup(props: ProgressProps, { slots }) {
    const ns = useNamespace('progress');
    // console.log(ns.b(), ns.e('nse'), ns.m('nsm'), ns.em('em', 'open'));

    const shapeClass = `${ns.b()} ${ns.m(props.type)}-shape`;
    // console.log(shapeClass);

    // check attribute
    const isLine = props.type === 'line';
    const isCircle = props.type === 'Circle';
    const isDashboard = props.type === 'dashboard';

    // radius of progress ring and dashboard
    const radius = 80;
    // eslint-disable-next-line vue/no-setup-props-destructure
    const strokeWidth = props.strokeWidth;
    const halfCircle = radius + strokeWidth;
    const percentage = ref(props.percentage);

    let rotation = 90;
    let translateY = radius + strokeWidth;
    // let percentage = props.percentage;

    if (isDashboard) {
      rotation = 90 + 180 * 0.7;
      translateY += strokeWidth;
    }

    // calculating related value
    const circumference = 2 * Math.PI * radius;
    let progressVal = circumference - (circumference * percentage.value) / 100;
    let dashboardVal =
      circumference * 0.3 +
      circumference * ((100 - percentage.value) / 100) * 0.7;

    effect(() => {
      percentage.value = props.percentage;
      progressVal = circumference - (circumference * percentage.value) / 100;
      dashboardVal =
        circumference * 0.3 +
        circumference * ((100 - percentage.value) / 100) * 0.7;
    });

    return () => (
      <div>
        <div
          class={shapeClass}
          v-show={isLine}
          style={{
            height: `${props.strokeWidth}px`,
            backgroundColor: props.defineBackColor
          }}
        >
          <div
            style={{
              width: `${percentage.value}%`,
              backgroundColor: `${props.color}`,
              height: `${props.strokeWidth}px`,
              borderRadius: '10px'
            }}
          ></div>
          <div
            v-show={!props.textInside && props.showText}
            style={{
              marginLeft: '102.5%',
              color: props.textColor,
              marginTop: `-${strokeWidth}px`
            }}
          >
            {percentage.value}%
          </div>
          <div
            v-show={props.textInside && props.showText}
            style={{
              marginLeft: `${percentage.value - 10}%`,
              fontSize: `${strokeWidth / 2}px`,
              color: props.textColor,
              marginTop: `-${strokeWidth}px`
            }}
          >
            {percentage.value}%
          </div>
        </div>
        <div
          class={shapeClass}
          v-show={isCircle}
          style={{ width: props.width, height: props.width }}
        >
          <svg
            height={radius * 2}
            width={radius * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            class='mask'
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <g origin={`${halfCircle}, ${halfCircle}`}>
              <circle
                fill='transparent'
                r={radius}
                stroke-width={strokeWidth}
                stroke={props.defineBackColor}
                stroke-linecap={props.strokeLinecap}
                stroke-dasharray={circumference}
                cx='50%'
                cy='50%'
              ></circle>
              <circle
                fill='transparent'
                r={radius}
                stroke-width={strokeWidth}
                stroke={'yellow'}
                cx='50%'
                cy='50%'
                stroke-dashoffset={progressVal}
                stroke-linejoin='round'
                stroke-linecap={props.strokeLinecap}
                stroke-dasharray={circumference}
              ></circle>
            </g>
          </svg>
          <div
            v-show={props.showText}
            style={{
              color: props.textColor,
              fontSize: `${radius / 4}px`,
              marginLeft: `${radius - radius / 4}px`,
              position: 'inherit',
              textAnchor: 'middle',
              alignSelf: 'center',
              transform: `translate(0%, -${translateY}px)`
            }}
          >
            {percentage.value}%
          </div>
        </div>

        <div
          v-show={isDashboard}
          style={{ width: props.width, height: props.width }}
        >
          <svg
            height={radius * 2}
            width={radius * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            class={shapeClass}
          >
            <g origin={`${halfCircle}, ${halfCircle}`}>
              <circle
                fill='transparent'
                r={radius}
                stroke-width={strokeWidth}
                stroke={props.defineBackColor}
                stroke-linecap={props.strokeLinecap}
                stroke-dashoffset={circumference * 0.3}
                stroke-dasharray={circumference}
                cx='50%'
                cy='50%'
              ></circle>
              <circle
                fill='transparent'
                r={radius}
                stroke-width={strokeWidth}
                stroke={'yellow'}
                cx='50%'
                cy='50%'
                stroke-dashoffset={dashboardVal}
                stroke-linejoin='round'
                stroke-linecap={props.strokeLinecap}
                stroke-dasharray={circumference}
              ></circle>
            </g>
          </svg>
          <div
            v-show={props.showText}
            style={{
              color: props.textColor,
              fontSize: `${radius / 4}px`,
              marginLeft: `${radius - radius / 4}px`,
              position: 'inherit',
              textAnchor: 'middle',
              alignSelf: 'center',
              transform: `translate(0%, -${translateY}px)`
            }}
          >
            {props.percentage}%
          </div>
        </div>
      </div>
    );
  }
});