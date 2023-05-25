import styles from './scene.module.sass';
import {Canvas} from "@react-three/fiber";
export const Scene = () => {
    return (
        <div className={styles.main}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
        </div>
    )
}