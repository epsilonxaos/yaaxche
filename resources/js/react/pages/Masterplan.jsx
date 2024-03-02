import Lotificacion from "../components/home/Lotificacion";
import Header from "../modules/Header";

export default function Masterplan() {
    return (
        <div className="min-h-screen bg-verde">
            <div className="pt-[180px] bg-crema"></div>
            <Header themeCrema={false} />
            <Lotificacion />
        </div>
    );
}
