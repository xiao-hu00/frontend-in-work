/*
 * @Author: xiaohu
 * @Date: 2024-08-17 23:04:38
 * @Description: plan平面的fragment shader
 */

/*
 * 当我们想实现重复效果时，可以通过对 vUv 乘以一定倍数放大，比如0.0-1.0放大3倍变成0.0-3.0，然后用 fract() 函数取小数使得数值在 0.0-1.0 里循环重复，比如1.1、2.1取小数后都变回0.1，再将该数值转换成 vec3 再设置到颜色上，就会产生重复的黑白渐变效果
 *
 *
 *
 *
 */

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    // vec3 col = vec3(0.);
    // vec2 vUv1 = 4. * (vUv - vec2(0.5)); // 将所有坐标整体移动，也就是将坐标原点移动到 plane 的正中心
    // if (abs(vUv1.y) < fwidth(vUv1.y)) {
    //   col.r = 1.;
    // }
    // if (abs(vUv1.x) < fwidth(vUv1.x)) {
    //   col.g = 1.;
    // }
    // vec2 cell = fract(vUv1);
    // float color = step(0.5, vUv.x);
    // gl_FragColor = vec4(vec3(color).xy, 0., 1.0);
    // gl_FragColor = vec4(vec3(fract(vUv.x * 3.0)), 1.0);
    // gl_FragColor = vec4(vec3(step(0.5, fract(vUv.x * 3.0))).xy, 0.,  1.0);
    // 先居中，后重复，再绘制圆形
    float dist = fract((length(vUv - vec2(0.5)) / 0.707 - 0.2 * uTime) * 5.0);
    float radius = 0.5;
    vec3 color = vec3(step(radius, dist));
    gl_FragColor = vec4(color, 1.0);
  }
`
export { fragmentShader }
