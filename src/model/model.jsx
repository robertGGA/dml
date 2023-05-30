import {useGLTF} from "@react-three/drei";

export function Model(props) {
    const {scene} = useGLTF("/room.glb");
    return <primitive object={scene} {...props} />
}