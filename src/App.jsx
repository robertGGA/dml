import {Canvas} from "@react-three/fiber";
import {Stage, PresentationControls} from "@react-three/drei";
import './App.css';
import {Model} from "./model/model";


function App() {
    return (
        <Canvas dpr={[1, 2]} shadows camera={{fov: 45}} style={{"position": "absolute"}}>
            <color attach="background" args={["green"]}/>
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={{files: "/venice_sunset_4k.hdr"}} center>
                    <Model scale={1}/>
                </Stage>
            </PresentationControls>
        </Canvas>
    );
}

export default App;