import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{h as t,t as n}from"./jsx-runtime-BZSvkxQn.js";import{S as r,n as i,r as a,y as o}from"./index-BEJYvJJJ.js";import{n as s}from"./three.module-v-zukn2U.js";var c=e(t(),1),l=[{id:`academic_a`,name:`Academic Block A`,code:`AC-A`,floors:2,totalRooms:12,type:`Academic Building`,primaryUse:`Classrooms, Lecture Halls, Tutorial Rooms`,departments:[`Computer Science and Engineering`,`Mathematics`],coords:{x:-35,z:-20,y:0},shape:`quad_courtyard`,color:`#3B82F6`,walkingTimeFromAdmin:`3 min`,accessibility:`Full step-free access, ramps, elevator installed`},{id:`academic_b`,name:`Academic Block B`,code:`AC-B`,floors:2,totalRooms:5,type:`Academic Building`,primaryUse:`Classrooms, Seminar Halls`,departments:[`Electronics & Communication`,`Electrical Engineering`],coords:{x:-45,z:25,y:0},shape:`curved_wing`,color:`#F59E0B`,walkingTimeFromAdmin:`4 min`,accessibility:`Step-free ground floor, elevator to 2nd floor`},{id:`science_complex`,name:`Science Complex`,code:`SCI`,floors:2,totalRooms:4,type:`Laboratory Complex`,primaryUse:`Specialized Hardware & Research Labs`,departments:[`Physics`,`Chemistry`,`CSE Research`],coords:{x:35,z:-30,y:0},shape:`oval_petal`,color:`#10B981`,walkingTimeFromAdmin:`5 min`,accessibility:`Heavy equipment ramps, freight & passenger elevator`},{id:`library`,name:`Central Library`,code:`LIB`,floors:2,totalRooms:2,type:`Academic Resource`,primaryUse:`Digital Archives, Reading Halls, Conference Rooms`,departments:[`All Departments`],coords:{x:-10,z:42,y:0},shape:`oval_petal`,color:`#06B6D4`,walkingTimeFromAdmin:`2 min`,accessibility:`Ground floor direct ramp, braille signage`},{id:`auditorium`,name:`Central Auditorium`,code:`AUD`,floors:1,totalRooms:2,type:`Assembly Venue`,primaryUse:`Convocations, Keynotes, Institute Events`,departments:[`Institute Level`],coords:{x:30,z:35,y:0},shape:`dome_auditorium`,color:`#EF4444`,walkingTimeFromAdmin:`6 min`,accessibility:`Wheelchair dedicated rows, hearing loop assistive tech`},{id:`lecture_center`,name:`Lecture Centre`,code:`LC`,floors:2,totalRooms:2,type:`Lecture Theatres`,primaryUse:`Large Common Core Courses`,departments:[`First Year Engineering`,`Common Core`],coords:{x:15,z:-40,y:0},shape:`oval_petal`,color:`#8B5CF6`,walkingTimeFromAdmin:`3 min`,accessibility:`Tiered step-free access on mid-level`},{id:`central_plaza`,name:`Central Plaza & Amphitheatre`,code:`PLAZA`,floors:1,totalRooms:1,type:`Outdoor Arena`,primaryUse:`Cultural Festivals, Spectra 2024, Exhibitions`,departments:[`Student Affairs / Cultural`],coords:{x:0,z:0,y:0},shape:`circular_amphitheatre`,color:`#EC4899`,walkingTimeFromAdmin:`1 min`,accessibility:`Wide paved amphitheatre ramps`},{id:`oat`,name:`Open Air Theatre (OAT)`,code:`OAT`,floors:1,totalRooms:1,type:`Outdoor Arena`,primaryUse:`Concerts, Club Practices, Dramatic Societies`,departments:[`Student Clubs`],coords:{x:55,z:20,y:0},shape:`stepped_bowl`,color:`#14B8A6`,walkingTimeFromAdmin:`7 min`,accessibility:`Perimeter accessible viewing deck`}],u=[{id:`A-101`,name:`Classroom A-101`,buildingId:`academic_a`,floor:1,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`,`PA System`]},{id:`A-102`,name:`Classroom A-102`,buildingId:`academic_a`,floor:1,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`]},{id:`A-103`,name:`Tutorial Room A-103`,buildingId:`academic_a`,floor:1,capacity:40,examCapacity:20,type:`tutorial`,accessible:!0,features:[`Whiteboard`,`AC`]},{id:`A-104`,name:`Large Lecture Hall A-104`,buildingId:`academic_a`,floor:1,capacity:80,examCapacity:40,type:`lecture_hall`,accessible:!0,features:[`Dual Projectors`,`Mic`,`AC`,`Power Sockets`,`Whiteboard`]},{id:`A-105`,name:`Classroom A-105`,buildingId:`academic_a`,floor:1,capacity:40,examCapacity:20,type:`classroom`,accessible:!1,features:[`Projector`,`Whiteboard`]},{id:`A-106`,name:`Classroom A-106`,buildingId:`academic_a`,floor:1,capacity:40,examCapacity:20,type:`classroom`,accessible:!1,features:[`Projector`,`Whiteboard`]},{id:`A-107`,name:`Classroom A-107`,buildingId:`academic_a`,floor:1,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`,`Recording Cam`]},{id:`A-108`,name:`Classroom A-108`,buildingId:`academic_a`,floor:1,capacity:40,examCapacity:20,type:`classroom`,accessible:!0,features:[`Whiteboard`,`AC`]},{id:`A-201`,name:`Lecture Hall A-201`,buildingId:`academic_a`,floor:2,capacity:80,examCapacity:40,type:`lecture_hall`,accessible:!0,features:[`Projector`,`AC`,`Mic`,`Whiteboard`]},{id:`A-202`,name:`Classroom A-202`,buildingId:`academic_a`,floor:2,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`]},{id:`A-203`,name:`Classroom A-203`,buildingId:`academic_a`,floor:2,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`AC`,`Whiteboard`]},{id:`A-204`,name:`Seminar Room A-204`,buildingId:`academic_a`,floor:2,capacity:40,examCapacity:20,type:`seminar_room`,accessible:!0,features:[`Video Conf`,`Smart Screen`,`AC`]},{id:`B-101`,name:`Classroom B-101`,buildingId:`academic_b`,floor:1,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`]},{id:`B-102`,name:`Classroom B-102`,buildingId:`academic_b`,floor:1,capacity:60,examCapacity:30,type:`classroom`,accessible:!0,features:[`Projector`,`Whiteboard`,`AC`]},{id:`B-201`,name:`Seminar Hall B-201`,buildingId:`academic_b`,floor:2,capacity:80,examCapacity:40,type:`seminar_hall`,accessible:!0,features:[`Projector`,`Power Sockets`,`Whiteboard`,`Mic`,`AC`]},{id:`B-202`,name:`Classroom B-202`,buildingId:`academic_b`,floor:2,capacity:40,examCapacity:20,type:`classroom`,accessible:!0,features:[`Whiteboard`,`AC`]},{id:`B-203`,name:`Lecture Theatre B-203`,buildingId:`academic_b`,floor:2,capacity:60,examCapacity:30,type:`lecture_hall`,accessible:!0,features:[`Dual Projectors`,`AC`,`Whiteboard`]},{id:`SC-L1`,name:`Computer Lab 1 (Lab-1)`,buildingId:`science_complex`,floor:1,capacity:40,examCapacity:20,type:`laboratory`,accessible:!0,features:[`40 Linux Workstations`,`Gigabit LAN`,`Projector`,`UPS Backup`]},{id:`SC-L2`,name:`Electronics Lab 2 (Lab-2)`,buildingId:`science_complex`,floor:1,capacity:40,examCapacity:20,type:`laboratory`,accessible:!0,features:[`DSO Oscilloscopes`,`Function Generators`,`Solder Stations`,`AC`]},{id:`SC-101`,name:`Advanced AI Lab`,buildingId:`science_complex`,floor:2,capacity:45,examCapacity:22,type:`laboratory`,accessible:!0,features:[`GPU Rigs`,`Smartboard`,`AC`,`Gigabit LAN`]},{id:`SC-102`,name:`Robotics Workshop Lab`,buildingId:`science_complex`,floor:2,capacity:50,examCapacity:25,type:`laboratory`,accessible:!0,features:[`Robotics Test Track`,`3D Printers`,`Power Outlets`,`Tool Bench`]},{id:`LIB-CR1`,name:`Library Conference Room 1`,buildingId:`library`,floor:1,capacity:35,examCapacity:17,type:`conference_room`,accessible:!0,features:[`Video Conferencing`,`Display Monitor`,`Wi-Fi 6`,`AC`]},{id:`LIB-CR2`,name:`Library Seminar Room 2`,buildingId:`library`,floor:2,capacity:30,examCapacity:15,type:`seminar_room`,accessible:!0,features:[`Smart Display`,`Whiteboard`,`Quiet Acoustic`]},{id:`AUD-Main`,name:`Central Grand Auditorium`,buildingId:`auditorium`,floor:1,capacity:350,examCapacity:175,type:`auditorium`,accessible:!0,features:[`Line Array Sound`,`Stage Rigging`,`Motorized Screen`,`Full AC`,`Green Rooms`]},{id:`AUD-Mini`,name:`Mini Auditorium`,buildingId:`auditorium`,floor:1,capacity:120,examCapacity:60,type:`auditorium`,accessible:!0,features:[`Stage`,`Surround Sound`,`HD Projection`,`AC`]},{id:`LC-101`,name:`Core Lecture Hall LC-101`,buildingId:`lecture_center`,floor:1,capacity:100,examCapacity:50,type:`lecture_hall`,accessible:!0,features:[`Tiered Seating`,`Acoustic Panels`,`Mic System`,`AC`]},{id:`OAT-Main`,name:`Open Air Amphitheatre`,buildingId:`oat`,floor:1,capacity:500,examCapacity:250,type:`outdoor`,accessible:!0,features:[`Open Stage`,`Ambient Floodlights`,`Acoustic Shell`]},{id:`Plaza-Green`,name:`Central Campus Plaza`,buildingId:`central_plaza`,floor:1,capacity:250,examCapacity:0,type:`outdoor`,accessible:!0,features:[`Paved Concentric Amphitheatre`,`Shade Trees`,`Power Hubs`]}],d=new class{constructor(){this.subscribers=new Set,this.selectedBuildingId=`academic_a`,this.selectedFloor=1,this.selectedRoomId=`A-104`,this.viewMode3D=!0}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(){this.subscribers.forEach(e=>e(this))}selectBuilding(e){this.selectedBuildingId=e,this.selectedFloor=1;let t=u.find(t=>t.buildingId===e);this.selectedRoomId=t?t.id:null,this.notify()}selectFloor(e){this.selectedFloor=e,this.notify()}},f=typeof window<`u`&&window.THREE?window.THREE:s,p=class{constructor(e,t,n){this.container=e,this.onSelectBuilding=t,this.onSelectFloor=n,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.buildingMeshes=new Map,this.floorGroups=new Map,this.hudElements=new Map,this.isDestroyed=!1,this.hoveredBuildingId=null,this.animationFrameId=null,this.isTransitioning=!1,this.cameraTarget={x:0,y:12,z:0},this.cameraPosition={x:80,y:95,z:110},this.init()}async init(){try{if(window.THREE)f=window.THREE;else{let e=await i(()=>import(`https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js`),[]);window.THREE=e,f=e;let{OrbitControls:t}=await i(async()=>{let{OrbitControls:e}=await import(`https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js`);return{OrbitControls:e}},[]);window.OrbitControls=t}this.setupScene(),this.setupLighting(),this.buildCampusEnvironment(),this.buildBuildings(),this.setupControls(),this.setupRaycasting(),this.animate(),window.addEventListener(`resize`,this.onResize),window.addEventListener(`keydown`,this.onKeyDown)}catch(e){console.warn(`Three.js initialization notice (falling back to 2D view):`,e),this.renderCanvasFallback()}}setupScene(){let e=this.container.clientWidth||800,t=this.container.clientHeight||550;this.scene=new f.Scene,this.scene.background=new f.Color(923430),this.scene.fog=new f.FogExp2(923430,.0035),this.camera=new f.PerspectiveCamera(38,e/t,1,1e3),this.camera.position.set(this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.camera.lookAt(this.cameraTarget.x,this.cameraTarget.y,this.cameraTarget.z),this.renderer=new f.WebGLRenderer({antialias:!0,alpha:!1,powerPreference:`high-performance`}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=f.PCFSoftShadowMap,this.container.innerHTML=``,this.container.appendChild(this.renderer.domElement),this.renderer.domElement.className=`w-full h-full cursor-grab active:cursor-grabbing outline-none`}setupLighting(){let e=new f.HemisphereLight(14544639,2042167,.85);this.scene.add(e);let t=new f.DirectionalLight(16774634,1.4);t.position.set(70,110,60),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=10,t.shadow.camera.far=300,t.shadow.camera.left=-90,t.shadow.camera.right=90,t.shadow.camera.top=90,t.shadow.camera.bottom=-90,t.shadow.bias=-5e-4,this.scene.add(t);let n=new f.DirectionalLight(3718648,.4);n.position.set(-60,40,-50),this.scene.add(n)}buildCampusEnvironment(){let e=new f.PlaneGeometry(260,260,32,32),t=new f.MeshStandardMaterial({color:2246959,roughness:.9,metalness:.05}),n=new f.Mesh(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);let r=new f.CylinderGeometry(28,30,.4,48),i=new f.MeshStandardMaterial({color:14078929,roughness:.6}),a=new f.Mesh(r,i);a.position.set(0,.2,0),a.receiveShadow=!0,this.scene.add(a);for(let e=8;e<=22;e+=3.5){let t=new f.TorusGeometry(e,.4,8,48),n=new f.MeshStandardMaterial({color:11051678,roughness:.5}),r=new f.Mesh(t,n);r.rotation.x=-Math.PI/2,r.position.set(0,.45,0),r.receiveShadow=!0,this.scene.add(r)}let o=new f.CylinderGeometry(6,6,.6,32),s=new f.MeshStandardMaterial({color:16707722,roughness:.4}),c=new f.Mesh(o,s);c.position.set(0,.5,0),c.receiveShadow=!0,this.scene.add(c);let l=new f.RingGeometry(38,48,64),u=new f.MeshStandardMaterial({color:3359061,roughness:.8}),d=new f.Mesh(l,u);d.rotation.x=-Math.PI/2,d.position.set(0,.22,0),d.receiveShadow=!0,this.scene.add(d);let p=new f.CylinderGeometry(14,16,.3,32),m=new f.MeshStandardMaterial({color:3718648,roughness:.1,metalness:.7,transparent:!0,opacity:.85}),h=new f.Mesh(p,m);h.position.set(50,.15,35),this.scene.add(h);let g=new f.CylinderGeometry(20,22,.5,32),_=new f.MeshStandardMaterial({color:1409085,roughness:.7}),v=new f.Mesh(g,_);v.position.set(75,.25,45),v.receiveShadow=!0,this.scene.add(v),this.generateCampusTrees()}generateCampusTrees(){let e=new f.ConeGeometry(1.8,4,7),t=new f.CylinderGeometry(.3,.4,1.2,5),n=new f.MeshStandardMaterial({color:1467700,roughness:.8}),r=new f.MeshStandardMaterial({color:7877903,roughness:.9});[[-15,-12],[-18,15],[16,-18],[20,18],[-22,-2],[-55,-10],[-50,10],[50,-10],[45,10],[-30,-50],[10,-55],[30,-55],[-10,60],[20,60],[60,-40]].forEach(([i,a])=>{let o=new f.Group,s=new f.Mesh(e,n);s.position.y=2.8,s.castShadow=!0,s.receiveShadow=!0;let c=new f.Mesh(t,r);c.position.y=.6,c.castShadow=!0,o.add(s),o.add(c),o.position.set(i+(Math.random()*4-2),0,a+(Math.random()*4-2));let l=.8+Math.random()*.4;o.scale.set(l,l,l),this.scene.add(o)})}buildBuildings(){l.forEach(e=>{let t=new f.Group;t.userData={buildingId:e.id,buildingData:e},t.position.set(e.coords.x,0,e.coords.z),e.shape===`quad_courtyard`?this.createCourtyardBuilding(t,e):e.shape===`oval_petal`?this.createOvalPetalBuilding(t,e):e.shape===`dome_auditorium`?this.createAuditoriumBuilding(t,e):e.shape===`circular_amphitheatre`?this.createPlazaMarker(t,e):this.createModernWing(t,e),this.scene.add(t),this.buildingMeshes.set(e.id,t)})}createCourtyardBuilding(e,t){let n=new f.MeshStandardMaterial({color:11817737,roughness:.7}),r=new f.MeshStandardMaterial({color:15857145,roughness:.4}),i=new f.MeshStandardMaterial({color:3718648,roughness:.1,metalness:.8}),a=new f.Group;a.name=`floor_1`;let o=new f.Mesh(new f.BoxGeometry(28,4.5,6),n);o.position.set(0,2.25,-10),o.castShadow=!0,o.receiveShadow=!0;let s=new f.Mesh(new f.BoxGeometry(28,4.5,6),n);s.position.set(0,2.25,10),s.castShadow=!0,s.receiveShadow=!0;let c=new f.Mesh(new f.BoxGeometry(6,4.5,14),n);c.position.set(-11,2.25,0),c.castShadow=!0,c.receiveShadow=!0;let l=new f.Mesh(new f.BoxGeometry(6,4.5,14),n);l.position.set(11,2.25,0),l.castShadow=!0,l.receiveShadow=!0;let u=new f.Mesh(new f.BoxGeometry(16,.4,14),new f.MeshStandardMaterial({color:1467700}));u.position.set(0,.2,0),u.receiveShadow=!0,a.add(o,s,c,l,u),e.add(a);let d=new f.Group;d.name=`floor_2`;let p=new f.Mesh(new f.BoxGeometry(28,4.5,6),r);p.position.set(0,6.75,-10),p.castShadow=!0,p.receiveShadow=!0;let m=new f.Mesh(new f.BoxGeometry(28,4.5,6),r);m.position.set(0,6.75,10),m.castShadow=!0,m.receiveShadow=!0;let h=new f.Mesh(new f.BoxGeometry(6,4.5,14),r);h.position.set(-11,6.75,0),h.castShadow=!0,h.receiveShadow=!0;let g=new f.Mesh(new f.BoxGeometry(6,4.5,14),r);g.position.set(11,6.75,0),g.castShadow=!0,g.receiveShadow=!0;let _=new f.Mesh(new f.BoxGeometry(30,.8,28),r);_.position.set(0,9.4,0),_.castShadow=!0;let v=new f.Mesh(new f.BoxGeometry(14,.9,12),i);v.position.set(0,9.6,0),d.add(p,m,h,g,_,v),e.add(d)}createOvalPetalBuilding(e,t){let n=new f.MeshStandardMaterial({color:14870768,roughness:.3}),r=new f.MeshStandardMaterial({color:165063,roughness:.1,metalness:.85}),i=new f.Mesh(new f.CylinderGeometry(11,13,4,32),n);i.scale.set(1.4,1,1),i.position.y=2,i.castShadow=!0,i.receiveShadow=!0;let a=new f.Mesh(new f.CylinderGeometry(10,11,4,32),n);a.scale.set(1.35,1,.95),a.position.y=6,a.castShadow=!0,a.receiveShadow=!0;let o=new f.SphereGeometry(9,32,16,0,Math.PI*2,0,Math.PI/2.3),s=new f.Mesh(o,r);s.scale.set(1.4,.45,1),s.position.y=8,s.castShadow=!0,e.add(i,a,s)}createAuditoriumBuilding(e,t){let n=new f.MeshStandardMaterial({color:16317180,roughness:.3}),r=new f.MeshStandardMaterial({color:14427686,roughness:.5}),i=new f.MeshStandardMaterial({color:3718648,roughness:.1,metalness:.8}),a=new f.Mesh(new f.BoxGeometry(22,5,26),n);a.position.y=2.5,a.castShadow=!0,a.receiveShadow=!0;let o=new f.Mesh(new f.BoxGeometry(14,3,6),r);o.position.set(0,1.5,14),o.castShadow=!0;let s=new f.Mesh(new f.SphereGeometry(10,32,16,0,Math.PI*2,0,Math.PI/2.5),i);s.scale.set(1.1,.5,1.3),s.position.y=5,s.castShadow=!0,e.add(a,o,s)}createModernWing(e,t){let n=new f.MeshStandardMaterial({color:16498468,roughness:.4}),r=new f.MeshStandardMaterial({color:3359061,roughness:.5}),i=new f.Mesh(new f.BoxGeometry(24,7,10),r);i.position.y=3.5,i.castShadow=!0,i.receiveShadow=!0;let a=new f.Mesh(new f.BoxGeometry(8,8,14),n);a.position.set(8,4,2),a.castShadow=!0,a.receiveShadow=!0,e.add(i,a)}createPlazaMarker(e,t){let n=new f.MeshStandardMaterial({color:15485081,roughness:.2}),r=new f.Mesh(new f.OctahedronGeometry(2),n);r.position.y=4,e.add(r)}setupControls(){window.OrbitControls&&(this.controls=new window.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2.15,this.controls.minDistance=25,this.controls.maxDistance=220,this.controls.target.set(0,6,0))}setupRaycasting(){this.raycaster=new f.Raycaster,this.mouse=new f.Vector2,this.renderer.domElement.addEventListener(`pointermove`,e=>{let t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let n=this.raycaster.intersectObjects(this.scene.children,!0),r=null;for(let e of n){let t=e.object;for(;t;){if(t.userData&&t.userData.buildingId){r=t.userData.buildingId;break}t=t.parent}if(r)break}if(r!==this.hoveredBuildingId){if(this.hoveredBuildingId&&this.buildingMeshes.has(this.hoveredBuildingId)){let e=this.buildingMeshes.get(this.hoveredBuildingId);e.position.y=0}if(this.hoveredBuildingId=r,this.hoveredBuildingId&&this.buildingMeshes.has(this.hoveredBuildingId)){let e=this.buildingMeshes.get(this.hoveredBuildingId);e.position.y=1.2,this.container.style.cursor=`pointer`}else this.container.style.cursor=`grab`}}),this.renderer.domElement.addEventListener(`click`,e=>{this.hoveredBuildingId&&(this.focusBuilding(this.hoveredBuildingId),this.onSelectBuilding&&this.onSelectBuilding(this.hoveredBuildingId))})}focusBuilding(e){let t=l.find(t=>t.id===e);if(!t)return;let n=t.coords.x+35,r=t.coords.z+42;this.flyCamera({x:n,y:32,z:r},{x:t.coords.x,y:5,z:t.coords.z},700)}resetCamera(){this.flyCamera({x:80,y:95,z:110},{x:0,y:6,z:0},800)}flyCamera(e,t,n=700){let r=performance.now(),i={...this.camera.position},a={...this.controls.target},o=e=>1-(1-e)**3,s=c=>{let l=c-r,u=Math.min(l/n,1),d=o(u);this.camera.position.x=i.x+(e.x-i.x)*d,this.camera.position.y=i.y+(e.y-i.y)*d,this.camera.position.z=i.z+(e.z-i.z)*d,this.controls.target.x=a.x+(t.x-a.x)*d,this.controls.target.y=a.y+(t.y-a.y)*d,this.controls.target.z=a.z+(t.z-a.z)*d,u<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}setExplodedMode(e){let t=this.buildingMeshes.get(`academic_a`);if(!t)return;let n=t.getObjectByName(`floor_2`);if(n){let t=e?8:0;n.position.y=t}}zoomIn(){this.camera&&this.camera.position.multiplyScalar(.85)}zoomOut(){this.camera&&this.camera.position.multiplyScalar(1.15)}onResize=()=>{if(!this.container||!this.renderer||!this.camera)return;let e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)};onKeyDown=e=>{if(e.key===`ArrowRight`||e.key===`ArrowLeft`){let t=l.map(e=>e.id),n=t.indexOf(this.hoveredBuildingId||d.selectedBuildingId),r=t[e.key===`ArrowRight`?(n+1)%t.length:(n-1+t.length)%t.length];this.focusBuilding(r),d.selectBuilding(r)}};animate=()=>{this.isDestroyed||(this.animationFrameId=requestAnimationFrame(this.animate),this.controls&&this.controls.update(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera))};renderCanvasFallback(){this.container.innerHTML=`
      <div class="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
        <div class="p-3 bg-emerald-500/20 text-emerald-400 rounded-full mb-3">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-1">Campus Interactive Map (2D Accessible Mode)</h3>
        <p class="text-slate-400 text-sm max-w-md mb-4">Rendering clean 2D layout with real loaded building capacities, active sessions, and room availability.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl w-full text-left">
          ${l.map(e=>`
            <button onclick="window.__citrixStore.selectBuilding('${e.id}')" class="p-3 rounded-lg border border-slate-700 bg-slate-800/80 hover:border-emerald-500 transition-all">
              <div class="text-xs text-emerald-400 font-semibold mb-1">${e.code}</div>
              <div class="text-sm font-bold text-white truncate">${e.name}</div>
              <div class="text-xs text-slate-400 mt-1">${e.totalRooms} rooms · ${e.floors} floors</div>
            </button>
          `).join(``)}
        </div>
      </div>
    `}destroy(){this.isDestroyed=!0,this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener(`resize`,this.onResize),window.removeEventListener(`keydown`,this.onKeyDown),this.renderer&&this.renderer.domElement&&this.renderer.dispose()}};function m(e){let t=`aerial`;l[0];let n=null,r=0,i=[`01 · Platform`,`02 · Impact`,`03 · Pipeline`];e.innerHTML=`
    <div id="citrix-landing-root" class="w-full min-h-screen bg-[#F7F8F6] text-[#101110] relative selection:bg-[#B8F36B] selection:text-[#101110] overflow-x-hidden">

      <style>
        html {
          scroll-behavior: smooth;
        }
        .citrix-landing-section {
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .citrix-landing-section.citrix-section-hidden {
          opacity: 0.15;
          transform: translateY(36px);
        }
        .citrix-landing-section.citrix-section-visible {
          opacity: 1;
          transform: translateY(0);
        }
      </style>

      <!-- ==========================================
           INTRO PRELOADER — learnwithzero style
           Full-screen cinematic entrance animation.
           ========================================== -->
      <div id="citrix-intro" aria-hidden="true" style="
        position:fixed;inset:0;z-index:9999;
        display:flex;flex-direction:column;
        pointer-events:none;
      ">
        <!-- Upper Panel -->
        <div id="intro-panel-top" style="
          flex:1;background:#080A09;
          display:flex;flex-direction:column;
          justify-content:flex-end;
          padding:0 clamp(24px,6vw,80px) 40px;
          position:relative;overflow:hidden;
          transition:transform 0.85s cubic-bezier(0.76,0,0.24,1);
        ">
          <!-- Subtle grid / noise texture overlay -->
          <div style="
            position:absolute;inset:0;
            background-image:radial-gradient(circle at 20% 80%, rgba(184,243,107,0.04) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(184,243,107,0.03) 0%, transparent 50%);
            pointer-events:none;
          "></div>

          <!-- Brand Symbol -->
          <div id="intro-symbol" style="
            position:absolute;top:clamp(24px,5vw,48px);left:clamp(24px,6vw,80px);
            display:flex;align-items:center;gap:10px;
            opacity:0;transform:translateY(6px);
            transition:opacity 0.6s ease,transform 0.6s ease;
          ">
            <div style="width:28px;height:28px;border-radius:8px;background:#101110;border:1px solid #1F2420;display:flex;align-items:center;justify-content:center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8F36B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <span style="font-family:'Inter',sans-serif;font-size:12px;font-weight:700;color:#777D78;letter-spacing:0.15em;text-transform:uppercase;">CITRIX · CampusOS</span>
          </div>

          <!-- Main Intro Heading -->
          <div style="overflow:hidden;margin-bottom:16px;">
            <div id="intro-line1" style="
              font-family:'Inter',sans-serif;
              font-size:clamp(52px,11vw,140px);
              font-weight:900;
              letter-spacing:-0.04em;
              line-height:0.9;
              color:#F7F8F6;
              clip-path:inset(0 0 110% 0);
              transition:clip-path 0.9s cubic-bezier(0.16,1,0.3,1);
            ">CITRIX</div>
          </div>
          <div style="overflow:hidden;margin-bottom:36px;">
            <div id="intro-line2" style="
              font-family:'Inter',sans-serif;
              font-size:clamp(52px,11vw,140px);
              font-weight:900;
              letter-spacing:-0.04em;
              line-height:0.9;
              color:#B8F36B;
              clip-path:inset(0 0 110% 0);
              transition:clip-path 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s;
            ">CampusOS</div>
          </div>

          <!-- Tag words -->
          <div id="intro-tagline" style="
            display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px;
          ">
            ${[`One`,`Campus.`,`One`,`Intelligent`,`System.`].map((e,t)=>`
              <div style="overflow:hidden;display:inline-block;">
                <span class="intro-tag-word" data-delay="${.04*t}" style="
                  display:inline-block;
                  font-family:'Inter',sans-serif;
                  font-size:clamp(13px,1.8vw,18px);
                  font-weight:500;
                  color:#9AA19C;
                  letter-spacing:-0.01em;
                  transform:translateY(100%);
                  transition:transform 0.7s cubic-bezier(0.16,1,0.3,1) ${.04*t}s;
                ">${e}</span>
              </div>
            `).join(``)}
          </div>

          <!-- Progress bar + counter row -->
          <div style="display:flex;align-items:center;gap:16px;padding-top:40px;">
            <div style="flex:1;height:1px;background:#1F2420;overflow:hidden;border-radius:1px;position:relative;">
              <div id="intro-progress-bar" style="
                position:absolute;inset:0;
                background:linear-gradient(90deg,#B8F36B 0%,#A6E854 100%);
                transform:scaleX(0);transform-origin:left;
                transition:transform 2.2s cubic-bezier(0.4,0,0.2,1);
                border-radius:1px;
              "></div>
            </div>
            <div id="intro-counter" style="
              font-family:'JetBrains Mono',monospace;
              font-size:11px;font-weight:600;color:#777D78;
              letter-spacing:0.08em;min-width:36px;text-align:right;
            ">0%</div>
          </div>

          <div style="
            position:absolute;bottom:0;left:0;right:0;height:1px;
            background:linear-gradient(90deg,transparent 0%,#1F2420 20%,#1F2420 80%,transparent 100%);
          "></div>
        </div>

        <!-- Lower Panel -->
        <div id="intro-panel-bottom" style="
          height:1px;background:#B8F36B;
          transition:transform 0.85s cubic-bezier(0.76,0,0.24,1);
        "></div>
      </div>

      <!-- ==========================================
           PERSISTENT FLOATING NAVIGATION BAR
           ========================================== -->
      <nav id="citrix-navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-10 py-4 pointer-events-none">
        <div class="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-white/90 backdrop-blur-xl border border-[#E5E8E3] rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
          
          <!-- Left: CITRIX Brand Symbol & Wordmark -->
          <button onclick="window.__citrixGoToPage(0)" class="flex items-center gap-3 group focus:outline-none text-left">
            <div class="relative w-8 h-8 rounded-xl bg-[#080A09] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <svg class="w-4 h-4 text-[#B8F36B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <div class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#B8F36B]"></div>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span class="text-base font-black tracking-[-0.03em] text-[#101110] font-sans">CITRIX</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-[#F0F2EE] text-[#777D78] border border-[#E5E8E3]">OS</span>
              </div>
              <span class="text-[10px] text-[#777D78] tracking-tight font-medium hidden sm:block">CampusOS Intelligence</span>
            </div>
          </button>

          <!-- Center: 3-Slide Stepper Navigation Links -->
          <div class="hidden md:flex items-center gap-1.5 text-xs font-semibold p-1 bg-[#F0F2EE] rounded-xl border border-[#E5E8E3]">
            <button id="nav-pill-0" onclick="window.__citrixGoToPage(0)" class="nav-page-btn px-3 py-1.5 rounded-lg transition-all bg-[#080A09] text-white shadow-sm">
              01 Platform
            </button>
            <button id="nav-pill-1" onclick="window.__citrixGoToPage(1)" class="nav-page-btn px-3 py-1.5 rounded-lg transition-all text-[#777D78] hover:text-[#101110]">
              02 Impact
            </button>
            <button id="nav-pill-2" onclick="window.__citrixGoToPage(2)" class="nav-page-btn px-3 py-1.5 rounded-lg transition-all text-[#777D78] hover:text-[#101110] flex items-center gap-1.5">
              <span>03 Pipeline</span>
              <span class="px-1 py-0.2 rounded text-[9px] bg-[#B8F36B] text-[#101110] font-mono font-bold">CP-SAT</span>
            </button>
          </div>

          <!-- Right: Explore Workspace CTA & Mobile Menu Toggle Button -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button id="nav-explore-btn" onclick="window.__citrixOnEnterWorkspace ? window.__citrixOnEnterWorkspace() : (window.location.href = '/login')"
              class="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080A09] text-white hover:bg-[#151917] transition-all text-xs font-semibold shadow-sm hover:shadow-md cursor-pointer">
              <span>Explore Workspace</span>
              <svg class="w-3.5 h-3.5 text-[#B8F36B] transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
            <button onclick="window.__citrixToggleMobileMenu()" class="md:hidden p-2 rounded-xl text-[#101110] hover:bg-[#F0F2EE] transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </button>
          </div>

        </div>

        <!-- Mobile Navigation Drawer -->
        <div id="mobile-nav-drawer" class="hidden md:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-[#E5E8E3] rounded-2xl p-4 shadow-elevation pointer-events-auto">
          <div class="flex flex-col gap-2 text-xs font-medium text-[#777D78]">
            <button onclick="window.__citrixGoToPage(0); window.__citrixToggleMobileMenu();" class="text-left px-3 py-2 rounded-lg hover:bg-[#F0F2EE] text-[#101110] font-bold">01 · Platform & Spatial Twin</button>
            <button onclick="window.__citrixGoToPage(1); window.__citrixToggleMobileMenu();" class="text-left px-3 py-2 rounded-lg hover:bg-[#F0F2EE] text-[#101110] font-bold">02 · Institutional Impact</button>
            <button onclick="window.__citrixGoToPage(2); window.__citrixToggleMobileMenu();" class="text-left px-3 py-2 rounded-lg hover:bg-[#F0F2EE] text-[#101110] font-bold flex items-center justify-between">
              <span>03 · CP-SAT Decision Pipeline</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] bg-[#B8F36B] text-[#101110] font-bold">NEW</span>
            </button>
          </div>
        </div>
      </nav>

      <!-- ==========================================
           MAIN PRESENTATION DECK (ALL 3 SECTIONS MERGED IN ONE PAGE)
           ========================================== -->
      <main id="citrix-deck-viewport" class="relative w-full pt-24 pb-28 space-y-24 sm:space-y-36">

        <!-- ==============================================================
             PAGE 0: CINEMATIC 3D CAMPUS HERO & SPATIAL TWIN
             ============================================================== -->
        <section id="deck-page-0" class="citrix-landing-section w-full scroll-mt-24 transition-all duration-700 ease-out citrix-section-visible" data-page="0">
          <div class="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            
            <!-- Hero Editorial Typography Header -->
            <div class="max-w-4xl mb-8 sm:mb-10">
              <!-- Eyebrow Pill -->
              <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E8E3] shadow-subtle mb-4 sm:mb-6">
                <span class="w-2 h-2 rounded-full bg-[#B8F36B] shadow-[0_0_8px_#B8F36B] animate-pulse"></span>
                <span class="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#101110]">
                  INTELLIGENT CAMPUS OPERATING SYSTEM
                </span>
              </div>

              <!-- Main Confident Headline -->
              <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.94] text-[#101110] mb-5">
                One Campus.<br/>
                <span class="text-[#777D78]">One Intelligent System.</span>
              </h1>

              <!-- Supporting Text -->
              <p class="text-base sm:text-lg md:text-xl text-[#777D78] font-normal leading-relaxed max-w-2xl mb-7">
                Bringing academic scheduling, campus operations and intelligent decision-making together in one unified platform.
              </p>

              <!-- Action CTAs & Navigation Prompts -->
              <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                <button onclick="window.__citrixGoToPage(1)"
                  class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#B8F36B] text-[#101110] hover:bg-[#A6E854] font-bold text-sm tracking-tight transition-all shadow-glow-sm hover:shadow-glow-green hover:-translate-y-0.5">
                  <span>Explore CITRIX</span>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </button>
                <button onclick="window.__citrixOnEnterWorkspace ? window.__citrixOnEnterWorkspace() : (window.location.href = '/login')"
                  class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#080A09] text-white hover:bg-[#151917] border border-[#1F2420] font-bold text-sm tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer">
                  <span>Explore Workspace</span>
                  <svg class="w-4 h-4 text-[#B8F36B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Campus Visual Viewport -->
            <div class="relative w-full h-[480px] sm:h-[580px] lg:h-[660px] rounded-3xl border border-[#E5E8E3] overflow-hidden shadow-elevation bg-[#080A09] group">
              
              <!-- Mode A: Aerial Spatial Twin -->
              <div id="hero-aerial-layer" class="absolute inset-0 w-full h-full transition-opacity duration-700 ${t===`aerial`?`opacity-100 z-10`:`opacity-0 pointer-events-none z-0`}">
                <img src="./assets/campus_aerial.jpg" alt="Chilika Institute of Technology Campus Digital Twin" 
                  class="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-transform duration-1000 group-hover:scale-[1.01]" />
                
                <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
                  <path d="M 280 240 Q 380 320 620 370" fill="none" stroke="#B8F36B" stroke-width="1.8" stroke-dasharray="6,6" class="animate-dash opacity-60" />
                  <path d="M 330 140 Q 480 220 540 310" fill="none" stroke="#B8F36B" stroke-width="1.5" stroke-dasharray="6,6" class="animate-dash opacity-50" />
                  <path d="M 540 310 Q 580 430 630 460" fill="none" stroke="#B8F36B" stroke-width="1.5" stroke-dasharray="6,6" class="animate-dash opacity-60" />
                  <circle cx="530" cy="310" r="130" fill="none" stroke="#B8F36B" stroke-width="1" stroke-dasharray="8,8" class="animate-dash opacity-30" />
                </svg>

                <!-- Interactive Building Radar Nodes -->
                <div onclick="window.__citrixHeroSelectBuilding('acad_a')" 
                  class="absolute left-[26%] top-[38%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="absolute w-8 h-8 rounded-full bg-[#B8F36B]/25 animate-radar-pulse"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#B8F36B] border-2 border-[#080A09] shadow-[0_0_12px_#B8F36B]"></span>
                  </div>
                  <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#B8F36B]/40 rounded-xl px-3 py-1.5 shadow-2xl min-w-[170px] pointer-events-auto transition-transform group-hover/node:scale-105">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Academic Block A</span>
                      <span class="w-1.5 h-1.5 rounded-full bg-[#B8F36B] animate-pulse"></span>
                    </div>
                    <div class="text-xs font-semibold text-white">12 sessions active</div>
                    <div class="text-[10px] text-[#9AA19C]">LT-1 to LT-4 · 92% Occ</div>
                  </div>
                </div>

                <div onclick="window.__citrixHeroSelectBuilding('acad_b')" 
                  class="absolute left-[33%] top-[20%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="absolute w-7 h-7 rounded-full bg-[#B8F36B]/25 animate-radar-pulse"></span>
                    <span class="w-3 h-3 rounded-full bg-[#B8F36B] border-2 border-[#080A09]"></span>
                  </div>
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#1F2420] group-hover/node:border-[#B8F36B]/40 rounded-xl px-3 py-1.5 shadow-2xl min-w-[160px] pointer-events-auto">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold">Academic Block B</div>
                    <div class="text-xs font-semibold text-white">8 sessions active</div>
                    <div class="text-[10px] text-[#9AA19C]">Seminar Halls · 74% Occ</div>
                  </div>
                </div>

                <div onclick="window.__citrixHeroSelectBuilding('sci_cmplx')" 
                  class="absolute left-[66%] top-[40%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="absolute w-8 h-8 rounded-full bg-[#B8F36B]/25 animate-radar-pulse"></span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#B8F36B] border-2 border-[#080A09] shadow-[0_0_10px_#B8F36B]"></span>
                  </div>
                  <div class="absolute right-6 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#B8F36B]/40 rounded-xl px-3 py-1.5 shadow-2xl min-w-[170px] pointer-events-auto text-right">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold">Science Complex</div>
                    <div class="text-xs font-semibold text-white">6 research sessions</div>
                    <div class="text-[10px] text-[#9AA19C]">Lab-1 3hr Block Active</div>
                  </div>
                </div>

                <div onclick="window.__citrixHeroSelectBuilding('oat')" 
                  class="absolute left-[54%] top-[48%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="w-3.5 h-3.5 rounded-full bg-[#B8F36B] border-2 border-[#080A09]"></span>
                  </div>
                  <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#1F2420] rounded-xl px-3 py-1.5 shadow-2xl min-w-[160px] pointer-events-auto">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold">Central Plaza & OAT</div>
                    <div class="text-xs font-semibold text-white">Open Air Amphitheatre</div>
                    <div class="text-[10px] text-[#9AA19C]">Robotics Club 15:00</div>
                  </div>
                </div>

                <div onclick="window.__citrixHeroSelectBuilding('audi')" 
                  class="absolute left-[62%] top-[60%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="w-3 h-3 rounded-full bg-[#B8F36B] border-2 border-[#080A09]"></span>
                  </div>
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#1F2420] rounded-xl px-3 py-1.5 shadow-2xl min-w-[150px] pointer-events-auto">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold">Auditorium</div>
                    <div class="text-xs font-semibold text-white">AUD-Main (350)</div>
                    <div class="text-[10px] text-[#9AA19C]">Approved Booking</div>
                  </div>
                </div>

                <div onclick="window.__citrixHeroSelectBuilding('library')" 
                  class="absolute left-[44%] top-[58%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node z-20">
                  <div class="relative flex items-center justify-center">
                    <span class="w-3 h-3 rounded-full bg-[#B8F36B] border-2 border-[#080A09]"></span>
                  </div>
                  <div class="absolute right-5 top-1/2 -translate-y-1/2 bg-[#080A09]/90 backdrop-blur-md border border-[#1F2420] rounded-xl px-3 py-1.5 shadow-2xl min-w-[150px] pointer-events-auto text-right">
                    <div class="text-[10px] font-mono text-[#B8F36B] font-bold">Central Library</div>
                    <div class="text-xs font-semibold text-white">4 study sessions</div>
                    <div class="text-[10px] text-[#9AA19C]">CR1 & CR2 Available</div>
                  </div>
                </div>
              </div>

              <!-- Mode B: Three.js WebGL 3D Interactive Canvas -->
              <div id="hero-threejs-container" class="absolute inset-0 w-full h-full transition-opacity duration-700 ${t===`threejs`?`opacity-100 z-10`:`opacity-0 pointer-events-none z-0`}">
              </div>

              <!-- Floating HUD Top Overlay -->
              <div class="absolute top-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between pointer-events-none gap-3">
                <div class="bg-[#080A09]/85 backdrop-blur-xl border border-[#1F2420] rounded-2xl px-4 py-2.5 shadow-2xl pointer-events-auto flex items-center gap-4 text-xs font-mono">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#B8F36B] shadow-[0_0_8px_#B8F36B] animate-pulse"></span>
                    <span class="text-white font-bold">CAMPUS OS</span>
                  </div>
                  <div class="h-3 w-px bg-[#1F2420]"></div>
                  <div class="text-[#9AA19C]">27 Venues Verified</div>
                  <div class="h-3 w-px bg-[#1F2420] hidden sm:block"></div>
                  <div class="text-[#9AA19C] hidden sm:block">189 Curricular Sessions</div>
                  <div class="h-3 w-px bg-[#1F2420] hidden md:block"></div>
                  <div class="text-[#B8F36B] font-bold hidden md:block">0 Clashes</div>
                </div>

                <div class="bg-[#080A09]/85 backdrop-blur-xl border border-[#1F2420] rounded-2xl p-1 shadow-2xl pointer-events-auto flex items-center gap-1 text-xs">
                  <button id="btn-mode-aerial" onclick="window.__citrixSetHeroMode('aerial')"
                    class="px-3 py-1.5 rounded-xl font-medium transition-all ${t===`aerial`?`bg-[#1F2420] text-[#B8F36B] font-bold shadow-sm`:`text-[#9AA19C] hover:text-white`}">
                    Aerial Spatial Matrix
                  </button>
                  <button id="btn-mode-threejs" onclick="window.__citrixSetHeroMode('threejs')"
                    class="px-3 py-1.5 rounded-xl font-medium transition-all ${t===`threejs`?`bg-[#1F2420] text-[#B8F36B] font-bold shadow-sm`:`text-[#9AA19C] hover:text-white`}">
                    Interactive 3D Canvas
                  </button>
                </div>
              </div>

              <!-- Floating HUD Bottom Overlay -->
              <div class="absolute bottom-4 left-4 right-4 z-30 flex flex-wrap items-end justify-between pointer-events-none gap-3">
                <div id="hero-building-inspector" class="bg-[#080A09]/90 backdrop-blur-xl border border-[#1F2420] rounded-2xl p-4 shadow-2xl pointer-events-auto max-w-sm transition-all">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-[10px] font-mono font-bold text-[#B8F36B] uppercase tracking-wider">Spatial Focus</span>
                    <span class="text-[10px] font-mono text-[#9AA19C]">CIT Spatial Model</span>
                  </div>
                  <div id="inspector-building-name" class="text-sm font-bold text-white mb-0.5">Academic Block A</div>
                  <div id="inspector-building-desc" class="text-xs text-[#9AA19C] mb-3">6 Lecture Theatres, 8 Department Classrooms, Step-free accessible</div>
                  <div class="flex items-center gap-2">
                    <div class="px-3 py-1.5 rounded-lg bg-[#B8F36B]/20 border border-[#B8F36B]/40 text-[#B8F36B] text-[11px] font-mono font-bold flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#B8F36B] animate-pulse"></span>
                      <span>Verified Active</span>
                    </div>
                    <div class="px-3 py-1.5 rounded-lg bg-[#151917] border border-[#1F2420] text-[#9AA19C] text-[11px] font-mono">
                      <span>0 Clashes</span>
                    </div>
                  </div>
                </div>

                <div class="bg-[#080A09]/90 backdrop-blur-xl border border-[#1F2420] rounded-xl px-3.5 py-2 pointer-events-auto text-[11px] font-mono text-[#9AA19C] hidden sm:flex items-center gap-3">
                  <span class="text-white font-bold">Orbit Controls:</span>
                  <span>🖱 Click & Drag to Rotate</span>
                  <span class="text-[#1F2420]">|</span>
                  <span>📜 Scroll to Zoom</span>
                </div>
              </div>

            </div>

            <!-- In-Page Advance Prompt -->
            <div class="mt-8 pt-4 border-t border-[#E5E8E3] flex items-center justify-between text-xs text-[#777D78]">
              <span class="font-mono">Slide 01 of 03 · Spatial Foundation</span>
              <button onclick="window.__citrixGoToPage(1)" class="inline-flex items-center gap-2 font-bold text-[#101110] hover:text-[#7FB33C] transition-colors">
                <span>Continue to Platform Architecture & Impact ↓</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              </button>
            </div>

          </div>
        </section>

        <!-- ==============================================================
             PAGE 1: INSTITUTIONAL ARCHITECTURE & IMPACT
             ============================================================== -->
        <section id="deck-page-1" class="citrix-landing-section w-full scroll-mt-24 transition-all duration-700 ease-out citrix-section-hidden" data-page="1">
          <div class="w-full bg-[#080A09] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-10 rounded-3xl border border-[#1F2420] max-w-7xl mx-auto relative overflow-hidden shadow-2xl">
            
            <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B8F36B]/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div class="relative z-10 max-w-6xl mx-auto">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121614] border border-[#1F2420] text-[#B8F36B] text-[11px] font-mono font-semibold uppercase tracking-[0.2em] mb-6">
                02 · INSTITUTIONAL ARCHITECTURE & IMPACT
              </div>

              <h2 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white max-w-4xl mb-6">
                A campus is more than buildings.<br/>
                <span class="text-[#9AA19C]">It's a system of interconnected decisions.</span>
              </h2>

              <p class="text-base sm:text-lg text-[#9AA19C] font-normal leading-relaxed max-w-3xl mb-12">
                Every semester, thousands of interdependent operational constraints collide: 189 curricular sessions, 40 specialized faculty, 27 physical venues, student cohort curricula, and institutional safety regulations. When managed in disconnected silos, schedule fragmentation and venue contention paralyze administration. CITRIX introduces the unified intelligence layer connecting campus operations into a single deterministic, conflict-free nervous system.
              </p>

              <!-- Telemetry Grid -->
              <div class="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 mb-14">
                <div class="p-5 sm:p-6 rounded-2xl bg-[#121614] border border-[#1F2420] flex flex-col justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9AA19C]">Schedulable Venues</span>
                  <div class="mt-4">
                    <span class="text-3xl sm:text-4xl font-black text-white font-mono">27</span>
                    <p class="text-[11px] text-[#777D78] mt-1">LTs, Labs, Auditoriums, OAT</p>
                  </div>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl bg-[#121614] border border-[#1F2420] flex flex-col justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9AA19C]">Curricular Sessions</span>
                  <div class="mt-4">
                    <span class="text-3xl sm:text-4xl font-black text-[#B8F36B] font-mono">189</span>
                    <p class="text-[11px] text-[#777D78] mt-1">162 lectures + 27 3h labs</p>
                  </div>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl bg-[#121614] border border-[#1F2420] flex flex-col justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9AA19C]">Faculty Workload</span>
                  <div class="mt-4">
                    <span class="text-3xl sm:text-4xl font-black text-white font-mono">40</span>
                    <p class="text-[11px] text-[#777D78] mt-1">Balanced max-hour limits</p>
                  </div>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl bg-[#121614] border border-[#1F2420] flex flex-col justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9AA19C]">Constraint Solver</span>
                  <div class="mt-4">
                    <span class="text-3xl sm:text-4xl font-black text-[#B8F36B] font-mono">&lt; 1.2s</span>
                    <p class="text-[11px] text-[#777D78] mt-1">Google OR-Tools CP-SAT</p>
                  </div>
                </div>

                <div class="p-5 sm:p-6 rounded-2xl bg-[#121614] border border-[#1F2420] col-span-2 md:col-span-1 flex flex-col justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9AA19C]">Timetable Clashes</span>
                  <div class="mt-4">
                    <span class="text-3xl sm:text-4xl font-black text-white font-mono">0</span>
                    <p class="text-[11px] text-[#777D78] mt-1">Zero overlap hard constraint</p>
                  </div>
                </div>
              </div>

              <!-- Comparison Architecture -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                <div class="p-6 sm:p-8 rounded-3xl bg-[#121614] border border-[#1F2420]">
                  <div class="flex items-center justify-between mb-5">
                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      Traditional Campus Operations
                    </span>
                    <span class="text-[10px] font-mono text-[#777D78]">UNCOORDINATED SILOS</span>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">Fragmented Decisions & Cascading Delays</h3>
                  <ul class="space-y-3.5 text-xs sm:text-sm text-[#9AA19C]">
                    <li class="flex items-start gap-3">
                      <span class="text-rose-400 font-bold">✕</span>
                      <span><strong>Disconnected Spreadsheets:</strong> Departments build isolated schedules leading to inadvertent double-bookings.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-rose-400 font-bold">✕</span>
                      <span><strong>Manual Email Approvals:</strong> Booking requests take days, with no visibility into true physical room availability.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-rose-400 font-bold">✕</span>
                      <span><strong>Disruption Chaos:</strong> When a faculty member is sick or a room is closed, manual reschedule attempts cause secondary clashes.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-rose-400 font-bold">✕</span>
                      <span><strong>Zero Accessibility Matching:</strong> Mobility-impaired students assigned to upstairs halls lacking elevators.</span>
                    </li>
                  </ul>
                </div>

                <div class="p-6 sm:p-8 rounded-3xl bg-[#121614] border border-[#B8F36B]/30 relative shadow-[0_0_50px_-20px_rgba(184,243,107,0.15)]">
                  <div class="flex items-center justify-between mb-5">
                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#B8F36B] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
                      CITRIX Unified Operating System
                    </span>
                    <span class="text-[10px] font-mono text-[#B8F36B]">SYNCHRONIZED GRAPH</span>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">Deterministic Precision & Autonomous Governance</h3>
                  <ul class="space-y-3.5 text-xs sm:text-sm text-[#9AA19C]">
                    <li class="flex items-start gap-3">
                      <span class="text-[#B8F36B] font-bold">✓</span>
                      <span><strong>Single Institutional Graph:</strong> Continuous mathematical synchronization across 27 venues, 40 faculty, and all student sections.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#B8F36B] font-bold">✓</span>
                      <span><strong>Google OR-Tools CP-SAT Solver:</strong> Hard constraints (zero overlaps, lunch blackout) solved in seconds with auditable validation.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#B8F36B] font-bold">✓</span>
                      <span><strong>Minimal-Move Disruption Repair:</strong> Automatic recovery solving unexpected leave by shifting the absolute minimum sessions.</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-[#B8F36B] font-bold">✓</span>
                      <span><strong>Institutional Self-Approval Guard:</strong> Strict rule: nobody can approve their own request, preventing administrative privilege abuse.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Advance Bar -->
              <div class="pt-6 border-t border-[#1F2420] flex items-center justify-end text-xs font-mono text-[#9AA19C]">
                <button onclick="window.__citrixGoToPage(2)" class="px-5 py-2.5 rounded-xl bg-[#B8F36B] text-[#101110] font-bold hover:bg-[#A6E854] transition-all flex items-center gap-2">
                  <span>Advance to CP-SAT Optimization Pipeline ↓</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        <!-- ==============================================================
             PAGE 2: CP-SAT DECISION PIPELINE (IN-BETWEEN ARCHITECTURE)
             ============================================================== -->
        <section id="deck-page-2" class="citrix-landing-section w-full scroll-mt-24 transition-all duration-700 ease-out citrix-section-hidden" data-page="2">
          <div class="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            
            <!-- Section Header -->
            <div class="max-w-4xl mb-8 sm:mb-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E8E3] text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#101110] mb-4">
                03 · DETERMINISTIC DECISION PIPELINE
              </div>
              <h2 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-[#101110] mb-5">
                From Natural Language to<br/>
                <span class="text-[#777D78]">Mathematically Verified Campus Operations.</span>
              </h2>
              <p class="text-base sm:text-lg text-[#777D78] leading-relaxed">
                How faculty space inquiries, student elective enrollments, and unplanned leaves are transformed through our 7-stage constraint model into certified operational schedules.
              </p>
            </div>

            <!-- Pipeline Infographic Visual Showcase -->
            <div class="mb-10 rounded-3xl border border-[#E5E8E3] bg-white p-4 sm:p-7 shadow-premium overflow-hidden">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E8E3]">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#B8F36B] animate-pulse"></span>
                  <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#101110]">
                    7-STAGE ARCHITECTURAL PIPELINE OVERVIEW
                  </span>
                </div>
                <span class="px-2.5 py-1 rounded-md bg-[#F0F2EE] text-[10px] font-mono font-semibold text-[#777D78]">
                  GOOGLE OR-TOOLS CP-SAT REASONING
                </span>
              </div>

              <!-- High-Resolution Graphic Display -->
              <div class="relative rounded-2xl overflow-hidden border border-[#E5E8E3] bg-[#F7F8F6] p-2 sm:p-4 group">
                <img src="./assets/pipeline_architecture.png" alt="CITRIX 7-Stage CP-SAT Optimization Pipeline" 
                  class="w-full h-auto object-contain rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-[1.008]" />
              </div>
            </div>

            <!-- Detailed 7-Stage Interactive Breakdown Cards -->
            <div class="mb-10">
              <div class="text-xs font-mono uppercase tracking-wider text-[#777D78] mb-4 font-bold">
                Detailed Stage Specifications
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                
                <!-- Stage 01 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">01</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">INGESTION</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Campus Data</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    40 faculty profiles, student cohort enrollments, 27 physical classrooms & labs, course curricula, and recurring booking submissions.
                  </p>
                </div>

                <!-- Stage 02 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">02</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">SEMANTIC NLP</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Intelligence Layer</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    Natural-language understanding for English and Hinglish (e.g. <em>"Kal 3 se 5 robotics workshop ke liye 60 logon ka accessible room chahiye"</em>).
                  </p>
                </div>

                <!-- Stage 03 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">03</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">FORMAL LOGIC</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Constraint Modelling</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    Faculty max-hour limits, student elective conflicts, step-free wheelchair routing, and institutional priority rules (Exams &gt; Classes &gt; Clubs).
                  </p>
                </div>

                <!-- Stage 04 (FEATURED) -->
                <div class="p-5 rounded-2xl bg-[#080A09] text-white border-2 border-[#B8F36B] shadow-glow-sm">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">04</span>
                    <span class="text-[10px] font-mono text-[#B8F36B] uppercase font-bold">SOLVER ENGINE</span>
                  </div>
                  <h4 class="font-bold text-sm text-white mb-1.5">CP-SAT Optimization</h4>
                  <p class="text-[#9AA19C] leading-relaxed text-[11px]">
                    Google OR-Tools CP-SAT solver deterministically proves mathematical feasibility and synthesizes conflict-free timetables in &lt;1.2s.
                  </p>
                </div>

                <!-- Stage 05 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">05</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">AUDIT CHECKS</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Validation</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    Hard-constraint checks: zero overlaps, campus 13:00–14:00 lunch blackout, 3h continuous labs, and strict 50% capacity alternating exam desk cap.
                  </p>
                </div>

                <!-- Stage 06 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">06</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">GOVERNANCE</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Human Approval</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    Admin review with strict Institutional Self-Approval Guard: nobody can approve their own request, ensuring ethical separation of powers.
                  </p>
                </div>

                <!-- Stage 07 -->
                <div class="p-5 rounded-2xl bg-white border border-[#E5E8E3] shadow-subtle hover:border-[#101110] transition-all col-span-1 md:col-span-2">
                  <div class="flex items-center justify-between mb-3">
                    <span class="w-6 h-6 rounded-full bg-[#B8F36B] text-[#101110] font-mono font-black text-[11px] flex items-center justify-center">07</span>
                    <span class="text-[10px] font-mono text-[#777D78] uppercase">LIVE SYNCHRONIZATION</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#101110] mb-1.5">Campus Execution</h4>
                  <p class="text-[#777D78] leading-relaxed text-[11px]">
                    Real-time publication: synchronized student cohort timetables, midsem exam room rosters, live digital signage displays, and faculty notifications across all departments.
                  </p>
                </div>

              </div>
            </div>

            <!-- Sequence Banner from image -->
            <div class="p-4 rounded-2xl bg-[#080A09] text-white border border-[#1F2420] flex flex-wrap items-center justify-between gap-4 text-xs font-mono mb-10">
              <div class="flex items-center gap-2">
                <span class="text-[#B8F36B]">⚡ AI UNDERSTANDS</span>
                <span class="text-[#777D78]">→</span>
                <span class="text-white">📅 CP-SAT OPTIMIZES</span>
                <span class="text-[#777D78]">→</span>
                <span class="text-emerald-400">🛡️ VALIDATOR CHECKS</span>
                <span class="text-[#777D78]">→</span>
                <span class="text-sky-400">👥 HUMANS APPROVE</span>
                <span class="text-[#777D78]">→</span>
                <span class="text-[#B8F36B]">✓ CAMPUS UPDATES</span>
              </div>
              <span class="text-[11px] text-[#9AA19C]">Zero-Conflict Guarantee</span>
            </div>

            <!-- Return to Top Bar -->
            <div class="pt-6 border-t border-[#E5E8E3] flex items-center justify-center text-xs font-mono">
              <button onclick="window.__citrixGoToPage(0)" class="px-6 py-3 rounded-xl bg-[#080A09] text-white font-bold hover:bg-[#151917] transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                <span>Return to the Top ↑</span>
              </button>
            </div>

          </div>
        </section>

      </main>

      <!-- ==========================================
           PERSISTENT FLOATING BOTTOM STEPPER CONTROLLER
           ========================================== -->
      <aside aria-label="Deck Stepper" class="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
        <div class="bg-[#080A09]/90 backdrop-blur-2xl border border-[#1F2420] rounded-2xl p-1.5 shadow-floating flex items-center gap-1.5 sm:gap-2 text-xs">
          
          <!-- Prev Button -->
          <button id="deck-btn-prev" onclick="window.__citrixPrevPage()" 
            class="px-3 py-1.5 rounded-xl text-[#9AA19C] hover:text-white hover:bg-[#121614] transition-all font-mono flex items-center gap-1 disabled:opacity-40 disabled:pointer-events-none">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            <span class="hidden sm:inline">Prev</span>
          </button>

          <!-- 3 Page Indicators / Clickable Pills -->
          <div class="flex items-center gap-1 px-1">
            <button onclick="window.__citrixGoToPage(0)" class="deck-step-pill px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all bg-[#B8F36B] text-[#101110]">
              01
            </button>
            <button onclick="window.__citrixGoToPage(1)" class="deck-step-pill px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium transition-all text-[#9AA19C] hover:text-white hover:bg-[#121614]">
              02
            </button>
            <button onclick="window.__citrixGoToPage(2)" class="deck-step-pill px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium transition-all text-[#9AA19C] hover:text-white hover:bg-[#121614]">
              03
            </button>
          </div>

          <!-- Current Title Indicator -->
          <div class="h-4 w-px bg-[#1F2420] mx-0.5 hidden sm:block"></div>
          <div id="deck-current-label" class="text-[11px] font-mono text-white font-bold px-2 hidden sm:block min-w-[95px]">
            01 · Platform
          </div>

          <!-- Next Button -->
          <button id="deck-btn-next" onclick="window.__citrixNextPage()" 
            class="px-3 py-1.5 rounded-xl bg-[#1F2420] text-[#B8F36B] hover:bg-[#B8F36B] hover:text-[#101110] transition-all font-mono font-bold flex items-center gap-1">
            <span class="hidden sm:inline">Next ↓</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </button>

          <!-- Keyboard Hints -->
          <div class="h-4 w-px bg-[#1F2420] mx-0.5 hidden md:block"></div>
          <div class="text-[10px] font-mono text-[#777D78] px-1.5 hidden md:block">
            ← / → Keys
          </div>

        </div>
      </aside>

    </div>
  `,window.__citrixToggleMobileMenu=function(){let e=document.getElementById(`mobile-nav-drawer`);e&&e.classList.toggle(`hidden`)};function a(e){if(e<0||e>=3)return;r=e,document.querySelectorAll(`.nav-page-btn`).forEach((t,n)=>{t.className=n===e?`nav-page-btn px-3 py-1.5 rounded-lg transition-all bg-[#080A09] text-white shadow-sm`:`nav-page-btn px-3 py-1.5 rounded-lg transition-all text-[#777D78] hover:text-[#101110]`}),document.querySelectorAll(`.deck-step-pill`).forEach((t,n)=>{t.className=n===e?`deck-step-pill px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all bg-[#B8F36B] text-[#101110] shadow-[0_0_10px_#B8F36B]`:`deck-step-pill px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium transition-all text-[#9AA19C] hover:text-white hover:bg-[#121614]`});let t=document.getElementById(`deck-current-label`);t&&(t.textContent=i[e]);let n=document.getElementById(`deck-btn-prev`);n&&(n.disabled=e===0);let a=document.getElementById(`deck-btn-next`);a&&(a.innerHTML=e===2?`<span class="hidden sm:inline">Top ↑</span><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>`:`<span class="hidden sm:inline">Next ↓</span><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`)}window.__citrixGoToPage=function(e){if(e<0||e>=3)return;let t=document.getElementById(`deck-page-${e}`);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),a(e))},window.__citrixNextPage=function(){r<2?window.__citrixGoToPage(r+1):window.__citrixGoToPage(0)},window.__citrixPrevPage=function(){r>0&&window.__citrixGoToPage(r-1)};let o=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.remove(`citrix-section-hidden`),e.target.classList.add(`citrix-section-visible`),a(parseInt(e.target.getAttribute(`data-page`)||`0`,10)))})},{threshold:.3,rootMargin:`-40px 0px -40px 0px`});setTimeout(()=>{document.querySelectorAll(`.citrix-landing-section`).forEach(e=>{o.observe(e)})},100),window.addEventListener(`keydown`,e=>{[`INPUT`,`TEXTAREA`].includes(document.activeElement?.tagName)||(e.key===`ArrowRight`||e.key===`ArrowDown`?window.__citrixNextPage():(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&window.__citrixPrevPage())}),window.__citrixSetHeroMode=function(e){t=e;let r=document.getElementById(`hero-aerial-layer`),i=document.getElementById(`hero-threejs-container`),a=document.getElementById(`btn-mode-aerial`),o=document.getElementById(`btn-mode-threejs`);e===`aerial`?(r&&(r.classList.remove(`opacity-0`,`pointer-events-none`,`z-0`),r.classList.add(`opacity-100`,`z-10`)),i&&(i.classList.remove(`opacity-100`,`z-10`),i.classList.add(`opacity-0`,`pointer-events-none`,`z-0`)),a&&(a.className=`px-3 py-1.5 rounded-xl font-bold transition-all bg-[#1F2420] text-[#B8F36B] shadow-sm`),o&&(o.className=`px-3 py-1.5 rounded-xl font-medium transition-all text-[#9AA19C] hover:text-white`)):(i&&(i.classList.remove(`opacity-0`,`pointer-events-none`,`z-0`),i.classList.add(`opacity-100`,`z-10`)),r&&(r.classList.remove(`opacity-100`,`z-10`),r.classList.add(`opacity-0`,`pointer-events-none`,`z-0`)),o&&(o.className=`px-3 py-1.5 rounded-xl font-bold transition-all bg-[#1F2420] text-[#B8F36B] shadow-sm`),a&&(a.className=`px-3 py-1.5 rounded-xl font-medium transition-all text-[#9AA19C] hover:text-white`),!n&&i&&s(i))},window.__citrixHeroSelectBuilding=function(e){let r=l.find(t=>t.id===e)||l[0],i=document.getElementById(`inspector-building-name`),a=document.getElementById(`inspector-building-desc`);i&&a&&(i.textContent=r.name,a.textContent=`${r.code} · ${r.floors} Floors · ${r.totalRooms} Rooms · ${r.primaryUse}`),n&&t===`threejs`&&n.focusBuilding(e)};function s(e){if(!n)try{n=new p(e,e=>{d.selectBuilding(e),window.__citrixHeroSelectBuilding(e)}),window.__citrixLandingScene=n}catch(e){console.warn(`Three.js hero canvas notice:`,e)}}let c=document.getElementById(`citrix-navbar`);window.addEventListener(`scroll`,()=>{c&&(window.scrollY>30?(c.classList.add(`py-2`),c.classList.remove(`py-4`)):(c.classList.add(`py-4`),c.classList.remove(`py-2`)))},{passive:!0}),(function(){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,t=document.getElementById(`citrix-intro`);if(!t)return;if(e){t.remove();return}let n=document.body.style.overflow;document.body.style.overflow=`hidden`;let r=document.getElementById(`intro-panel-top`),i=document.getElementById(`intro-panel-bottom`),a=document.getElementById(`intro-line1`),o=document.getElementById(`intro-line2`),s=document.getElementById(`intro-symbol`),c=document.getElementById(`intro-progress-bar`),l=document.getElementById(`intro-counter`),d=document.querySelectorAll(`.intro-tag-word`);requestAnimationFrame(()=>{s&&(s.style.opacity=`1`,s.style.transform=`translateY(0)`)}),setTimeout(()=>{c&&(c.style.transform=`scaleX(1)`);let e=0,t=setInterval(()=>{e=Math.min(e+1,100),l&&(l.textContent=e+`%`),e>=100&&clearInterval(t)},22)},200),setTimeout(()=>{a&&(a.style.clipPath=`inset(0 0 0% 0)`)},600),setTimeout(()=>{o&&(o.style.clipPath=`inset(0 0 0% 0)`)},720),setTimeout(()=>{d.forEach(e=>{let t=parseFloat(e.dataset.delay||0)*1e3;setTimeout(()=>{e.style.transform=`translateY(0)`},t)})},1100),setTimeout(()=>{r&&(r.style.transform=`translateY(-100%)`),i&&(i.style.height=`50vh`,i.style.transform=`translateY(100vh)`)},2900),setTimeout(()=>{document.body.style.overflow=n,t.style.transition=`opacity 0.3s ease`,t.style.opacity=`0`,t.style.pointerEvents=`none`,u(),setTimeout(()=>t.remove(),350)},3750)})();function u(){let e=document.getElementById(`citrix-navbar`);e&&(e.style.transform=`translateY(-16px)`,e.style.opacity=`0`,e.style.transition=`transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease`,requestAnimationFrame(()=>{setTimeout(()=>{e.style.transform=`translateY(0)`,e.style.opacity=`1`},80)})),f(`#deck-page-0 .inline-flex`,.08,200),f(`#deck-page-0 h1`,0,300),f(`#deck-page-0 p`,0,450),f(`#deck-page-0 .flex.flex-wrap`,0,560)}function f(e,t,n){document.querySelectorAll(e).forEach((e,r)=>{e.style.opacity=`0`,e.style.transform=`translateY(22px)`,e.style.transition=`opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${n+r*t*1e3}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${n+r*t*1e3}ms`,setTimeout(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`},n+r*t*1e3)})}}var h=n();function g(){let e=(0,c.useRef)(null),t=r(),{user:n,isAuthenticated:i}=o();return(0,c.useEffect)(()=>(window.__citrixOnEnterWorkspace=()=>{i&&n?.role?t(a(n.role)):t(`/login`)},e.current&&m(e.current),()=>{delete window.__citrixOnEnterWorkspace}),[t,i,n]),(0,h.jsx)(`div`,{ref:e,className:`w-full min-h-screen`})}export{g as default};