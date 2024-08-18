/*
 * @Author: xiaohu
 * @Date: 2024-08-17 23:01:34
 * @Description: plan平面的vertex shader
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`

export { vertexShader }
