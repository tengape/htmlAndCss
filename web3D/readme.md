# 1.three.js 快速入门
## 1.5.设置材质效果
### 1.5.1 材质类型
1.  MeshBasicMaterial 基础网格材质，不受光照影响的材质
2.  MeshLamberMaterial Lambert网格材质，与光照反应，漫返射
3.  MeshPhongMaterial 与光照反应，高光材质
### 1.5.2 创建材质
1.  构造函数设置参数
```
    对象{颜色、透明度}
    {
        color:0x0000ff,     //材质颜色
        transparent:true,   //开启透明度
        opacity:0.5,        //设置透明度具体值
    }
```
2.  属性设置
```
    material.opacity = 0.5;
    material.transparent = true;
```
3.  参数或属性
```
    color color:0x0000ff,   //材质颜色
    wireframe 将几何图形渲染为线框。默认为false
    opacity 透明度设置，0表示完全透明， 1表示完全不透明
    transparent 是否开启透明，默认为false
```
4.  半透明效果设置
```
    transparent:true;
    opacity:0.5;
```
## 1.6.光照效果设置
### 1.6.1 光照计算原理
```

```
### 1.6.2 几种光源介绍，threejs API查找
```

```
### 1.6.3 threejs编辑器辅助介绍
```

```
### 1.6.4 光源类型
1.  环境光 AmbientLight
2.  点光源
```
    构造函数参数 
        设置颜色
        point = new THREE.PointLight(0xffffff);
    位置属性
        point.postion.set(400, 200, 300);
```
3.  方向光

### 1.6.5 add方法
```
    通过add方法插入场景中，不插入的话，渲染的时候不会获取光源的信息进行光照计算
```

# 2.顶点概念、几何体结构
## 2.1 顶点位置数据解析渲染
## 2.1.1 网格模型Mesh
1.  向何体 geometry 
2.  材质material
## 2.1.2 BufferGeometry基类
1.  派生类（子类）
```
    BoxBufferGeometry 立方体
    CylinderBufferGeometry 圆柱体
```
2.  属性
```
    1、attributes 对象
    2、position 位置对象 
    3、属性类型是threejs的buffer
```
## 2.1.3 BufferAttribute 缓冲区属性构造函数







# A.BoxGeometry
```
BoxGeometry是四边形的原始几何类，它通常使用构造函数所提供的“width”、“height”、“depth”参数来创建立方体或者不规则四边形。
```
```
说明：
    BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer,
    depthSegments : Integer)
    width — X轴上面的宽度，默认值为1。
    height — Y轴上面的高度，默认值为1。
    depth — Z轴上面的深度，默认值为1。
    widthSegments — （可选）宽度的分段数，默认值是1。
    heightSegments — （可选）宽度的分段数，默认值是1。
    depthSegments — （可选）宽度的分段数，默认值是1。
```
```
    代码：
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
```
# B.正交相机（OrthographicCamera）
```
    这一摄像机使用orthographic projection（正交投影）来进行投影。
    在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。
    这对于渲染2D场景或者UI元素是非常有用的。
    代码：
    const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    scene.add( camera );
```
## B.1 构造器
```
    OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )
    left — 摄像机视锥体左侧面。
    right — 摄像机视锥体右侧面。
    top — 摄像机视锥体上侧面。
    bottom — 摄像机视锥体下侧面。
    near — 摄像机视锥体近端面。
    far — 摄像机视锥体远端面。

    这些参数一起定义了摄像机的viewing frustum（视锥体）。
```
# C.轨道控制器（OrbitControls）

## Constructor
```
OrbitControls( object : Camera, domElement : HTMLDOMElement )
```

```
Orbit controls（轨道控制器）可以使得相机围绕目标进行轨道运动。
要使用这一功能，就像在/examples（示例）目录中的所有文件一样， 您必须在HTML中包含这个文件。
```

```
代码：
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

    const controls = new OrbitControls( camera, renderer.domElement );

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set( 0, 20, 100 );
    controls.update();

    function animate() {

        requestAnimationFrame( animate );

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        renderer.render( scene, camera );

    }
```