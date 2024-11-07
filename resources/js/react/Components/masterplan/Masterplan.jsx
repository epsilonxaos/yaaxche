import { useContext, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";
import AppContext from "../../context/AppContext";
import { formatearComoMoneda } from "../Lotes";

const Plantilla = ({ lote = [] }) => {
    return (
        <div>
            <h2 className="text-base font-medium">Lote #{lote.lote}</h2>

            <p className="text-sm mb-0">
                {formatearComoMoneda(
                    lote.precio_total * 0.1 + lote.precio_total
                )}{" "}
                MXN
            </p>
            <p className="text-sm mb-0">
                ${lote.m2} m<sup>2</sup>
            </p>
            <p className="text-sm capitalize">
                {lote.status == 1
                    ? "disponible"
                    : lote.status == 2
                    ? "apartado"
                    : "vendido"}
            </p>
            {lote.status == 1 && <small>Haga clic para ver más</small>}
        </div>
    );
};

const Masterplan = () => {
    const [finish, setFinish] = useState(false);
    const { datos, setLote, lote } = useContext(AppContext);

    const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 768px)" });

    useEffect(() => {
        if (datos.length > 0) {
            datos.forEach((lo, idx) => {
                const el = document.getElementById("L" + lo.lote);

                if (el) {
                    console.log(el);
                    const path = el.querySelector(".path");
                    if (lo.status == 1) path.classList.add("disponible");
                    else if (lo.status == 2) path.classList.add("apartado");
                    else path.classList.add("vendido");

                    path.setAttribute("data-tooltip-id", "my-tooltip");
                    path.setAttribute("data-lote-index", idx);
                    path.setAttribute(
                        "data-tooltip-html",
                        ReactDOMServer.renderToStaticMarkup(
                            <Plantilla lote={lo} />
                        )
                    );

                    if (lo.status == 1)
                        path.addEventListener("click", (ev) => {
                            setLote(lo.lote);
                            window.scrollTo({
                                behavior: "smooth",
                                top: document.getElementById("cotizador")
                                    ? document.getElementById("cotizador")
                                          .offsetTop
                                    : 0,
                            });
                        });
                }
            });

            setFinish(true);
        }
    }, [datos, isDesktopOrTablet]);

    useEffect(() => {
        console.log(lote);
        if (lote) {
            document
                .querySelectorAll("#masterplan .path")
                .forEach((el) => el.classList.remove("select"));
            document
                .querySelector("#masterplan #L" + lote + " .path")
                ?.classList.add("select");
        }
    }, [lote]);

    return (
        <>
            {isDesktopOrTablet ? <MasterplanSVG /> : <MasterplanSVGMovil />}

            <Tooltip id="my-tooltip" />
        </>
    );
};

function MasterplanSVG() {
    return (
        <svg
            className="absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="masterplan"
            viewBox="0 0 1920 1080"
        >
            <g id="L287">
                <polygon
                    className="path"
                    points="1133.35 615.25 1132.34 635.04 1065.11 635.98 1066.14 616.22 1133.35 615.25"
                />
            </g>
            <g id="L55">
                <polygon
                    className="path"
                    points="1330.62 239.77 1328.68 283.09 1307.99 283.58 1310.18 240.07 1330.62 239.77"
                />
            </g>
            <g id="L54">
                <polygon
                    className="path"
                    points="1353.86 239.44 1351.94 282.54 1331.39 283.02 1333.32 239.73 1353.86 239.44"
                />
            </g>
            <g id="L53">
                <polygon
                    className="path"
                    points="1377.4 239.11 1375.26 281.99 1354.62 282.47 1356.56 239.41 1377.4 239.11"
                />
            </g>
            <g id="L52">
                <polygon
                    className="path"
                    points="1378.57 215.53 1377.54 236.4 1310.31 237.36 1311.38 216.5 1378.57 215.53"
                />
            </g>
            <g id="L51">
                <polygon
                    className="path"
                    points="1379.73 192.41 1378.71 212.84 1311.51 213.8 1312.55 193.35 1379.73 192.41"
                />
            </g>
            <g id="L50">
                <polygon
                    className="path"
                    points="1380.86 169.82 1379.86 189.7 1312.67 190.66 1313.67 170.78 1380.86 169.82"
                />
            </g>
            <g id="L49">
                <polygon
                    className="path"
                    points="1382 146.81 1381 167.12 1313.81 168.09 1314.83 147.78 1382 146.81"
                />
            </g>
            <g id="L48">
                <polygon
                    className="path"
                    points="1383.16 123.61 1382.14 144.11 1314.98 145.08 1316.01 124.58 1383.16 123.61"
                />
            </g>
            <g id="L47">
                <polygon
                    className="path"
                    points="1384.28 101.13 1383.19 122.95 1383.17 120.92 1316.14 121.88 1317.14 102.1 1384.28 101.13"
                />
            </g>
            <g id="L46">
                <polygon
                    className="path"
                    points="1340.79 55.44 1338.82 99.1 1317.27 99.41 1319.47 55.95 1340.79 55.44"
                />
            </g>
            <g id="L45">
                <polygon
                    className="path"
                    points="1363.72 54.88 1361.75 98.77 1341.52 99.06 1343.48 55.37 1363.72 54.88"
                />
            </g>
            <g id="L44">
                <polygon
                    className="path"
                    points="1386.15 54.32 1383.95 98.45 1363.98 98.73 1365.95 54.81 1386.15 54.32"
                />
            </g>
            <g id="L75">
                <polygon
                    className="path"
                    points="1302.87 746.51 1300.92 789.83 1280.24 790.32 1282.44 746.81 1302.87 746.51"
                />
            </g>
            <g id="L74">
                <polygon
                    className="path"
                    points="1326.11 746.17 1324.18 789.28 1303.63 789.76 1305.57 746.46 1326.11 746.17"
                />
            </g>
            <g id="L73">
                <polygon
                    className="path"
                    points="1349.64 745.83 1347.51 788.73 1326.88 789.21 1328.82 746.12 1349.64 745.83"
                />
            </g>
            <g id="L72">
                <polygon
                    className="path"
                    points="1350.82 722.27 1349.78 743.13 1282.57 744.1 1283.62 723.24 1350.82 722.27"
                />
            </g>
            <g id="L71">
                <polygon
                    className="path"
                    points="1351.99 699.14 1350.96 719.58 1283.75 720.54 1284.79 700.09 1351.99 699.14"
                />
            </g>
            <g id="L70">
                <polygon
                    className="path"
                    points="1353.1 676.55 1352.11 696.43 1284.92 697.4 1285.93 677.51 1353.1 676.55"
                />
            </g>
            <g id="L69">
                <polygon
                    className="path"
                    points="1354.25 653.53 1353.24 673.84 1286.07 674.81 1287.08 654.51 1354.25 653.53"
                />
            </g>
            <g id="L68">
                <polygon
                    className="path"
                    points="1355.41 630.35 1354.39 650.84 1287.22 651.81 1288.25 631.32 1355.41 630.35"
                />
            </g>
            <g id="L67">
                <polygon
                    className="path"
                    points="1356.53 607.87 1355.44 629.64 1355.42 627.65 1288.39 628.61 1289.39 608.84 1356.53 607.87"
                />
            </g>
            <g id="L66">
                <polygon
                    className="path"
                    points="1356.67 605.17 1289.52 606.15 1291.71 562.68 1358.86 561.06 1356.67 605.17"
                />
            </g>
            <g id="L186">
                <polygon
                    className="path"
                    points="1262.99 633.61 1261.97 654.11 1194.96 655.07 1196.03 634.57 1262.99 633.61"
                />
            </g>
            <g id="L187">
                <polygon
                    className="path"
                    points="1261.84 656.8 1260.82 677.1 1193.78 678.07 1194.82 657.76 1261.84 656.8"
                />
            </g>
            <g id="L188">
                <polygon
                    className="path"
                    points="1260.68 679.81 1259.69 699.69 1192.61 700.66 1193.64 680.77 1260.68 679.81"
                />
            </g>
            <g id="L189">
                <polygon
                    className="path"
                    points="1259.56 702.39 1258.54 722.84 1191.42 723.81 1192.47 703.35 1259.56 702.39"
                />
            </g>
            <g id="L190">
                <polygon
                    className="path"
                    points="1258.41 725.53 1257.36 746.39 1190.21 747.36 1191.28 726.5 1258.41 725.53"
                />
            </g>
            <g id="L193">
                <polygon
                    className="path"
                    points="1210.45 749.76 1208.5 793.1 1187.82 793.58 1190.06 750.05 1210.45 749.76"
                />
            </g>
            <g id="L192">
                <polygon
                    className="path"
                    points="1233.7 749.43 1231.75 792.53 1211.2 793.02 1213.15 749.72 1233.7 749.43"
                />
            </g>
            <g id="L191">
                <polygon
                    className="path"
                    points="1257.23 749.09 1255.09 791.99 1234.45 792.47 1236.39 749.39 1257.23 749.09"
                />
            </g>
            <g id="L185">
                <polygon
                    className="path"
                    points="1264.1 611.13 1263.03 632.94 1263 630.91 1196.16 631.87 1197.19 612.1 1264.1 611.13"
                />
            </g>
            <g id="L184">
                <polygon
                    className="path"
                    points="1266.45 564.32 1264.24 608.51 1197.32 609.4 1199.35 570.11 1204.45 565.83 1266.45 564.32"
                />
            </g>
            <g id="L288">
                <polygon
                    className="path"
                    points="1132.19 637.73 1131.14 658.22 1063.92 659.19 1064.98 638.69 1132.19 637.73"
                />
            </g>
            <g id="L289">
                <polygon
                    className="path"
                    points="1131 660.91 1129.95 681.22 1062.73 682.19 1063.78 661.88 1131 660.91"
                />
            </g>
            <g id="L290">
                <polygon
                    className="path"
                    points="1129.82 683.92 1128.8 703.81 1061.56 704.78 1062.59 684.89 1129.82 683.92"
                />
            </g>
            <g id="L291">
                <polygon
                    className="path"
                    points="1128.65 706.5 1127.6 726.95 1060.38 727.92 1061.43 707.47 1128.65 706.5"
                />
            </g>
            <g id="L292">
                <polygon
                    className="path"
                    points="1127.47 729.64 1126.39 750.51 1059.15 751.48 1060.23 730.62 1127.47 729.64"
                />
            </g>
            <g id="L293">
                <polygon
                    className="path"
                    points="1126.26 753.21 1124.04 796.1 1056.77 797.69 1059.01 754.17 1126.26 753.21"
                />
            </g>
            <g id="L286">
                <polyline
                    className="path"
                    points="1087.6 613.21 1066.27 613.51 1068.31 574.23 1073.4 569.94 1089.56 569.68 1131.85 569.01 1135.52 573.01 1133.49 612.55 1113.24 612.83"
                />
            </g>
            <g id="L83">
                <polygon
                    className="path"
                    points="1338.49 952.48 1337.47 972.92 1270.28 973.88 1271.3 953.44 1338.49 952.48"
                />
            </g>
            <g id="L84">
                <polygon
                    className="path"
                    points="1337.42 974.42 1336.4 994.87 1269.2 995.82 1270.23 975.37 1337.42 974.42"
                />
            </g>
            <g id="L85">
                <polygon
                    className="path"
                    points="1336.29 996.35 1334.08 1040.47 1314.13 1040.76 1316.09 996.84 1336.29 996.35"
                />
            </g>
            <g id="L86">
                <polygon
                    className="path"
                    points="1313.05 997.02 1310.85 1041.13 1290.88 1041.42 1292.85 997.5 1313.05 997.02"
                />
            </g>
            <g id="L87">
                <polygon
                    className="path"
                    points="1289.66 997.65 1287.45 1041.76 1267.49 1042.05 1269.46 998.13 1289.66 997.65"
                />
            </g>
            <g id="L82">
                <polygon
                    className="path"
                    points="1339.63 929.89 1338.63 949.77 1271.45 950.74 1272.44 930.85 1339.63 929.89"
                />
            </g>
            <g id="L81">
                <polygon
                    className="path"
                    points="1340.78 906.88 1339.76 927.19 1272.57 928.16 1273.6 907.85 1340.78 906.88"
                />
            </g>
            <g id="L80">
                <polygon
                    className="path"
                    points="1341.92 883.7 1340.91 904.18 1273.74 905.15 1274.78 884.66 1341.92 883.7"
                />
            </g>
            <g id="L79">
                <polygon
                    className="path"
                    points="1343.05 861.22 1341.96 883.03 1341.93 881 1274.91 881.97 1275.91 862.18 1343.05 861.22"
                />
            </g>
            <g id="L78">
                <polygon
                    className="path"
                    points="1299.55 815.51 1297.58 859.18 1276.04 859.49 1278.23 816.03 1299.55 815.51"
                />
            </g>
            <g id="L77">
                <polygon
                    className="path"
                    points="1322.48 814.96 1320.51 858.85 1300.28 859.13 1302.26 815.45 1322.48 814.96"
                />
            </g>
            <g id="L76">
                <polygon
                    className="path"
                    points="1345.38 814.41 1343.18 858.53 1323.22 858.82 1325.19 814.89 1345.38 814.41"
                />
            </g>
            <g id="L164">
                <polygon
                    className="path"
                    points="1247.82 58.17 1245.86 101.84 1224.31 102.14 1226.5 58.68 1247.82 58.17"
                />
            </g>
            <g id="L163">
                <polygon
                    className="path"
                    points="1270.77 57.61 1268.8 101.5 1248.56 101.79 1250.53 58.11 1270.77 57.61"
                />
            </g>
            <g id="L162">
                <polygon
                    className="path"
                    points="1293.66 57.06 1291.46 101.18 1271.5 101.47 1273.46 57.55 1293.66 57.06"
                />
            </g>
            <g id="L165">
                <polygon
                    className="path"
                    points="1291.32 103.87 1290.24 125.69 1290.21 123.66 1223.18 124.62 1224.18 104.83 1291.32 103.87"
                />
            </g>
            <g id="L166">
                <polygon
                    className="path"
                    points="1290.2 126.35 1289.19 146.84 1222.02 147.81 1223.04 127.32 1290.2 126.35"
                />
            </g>
            <g id="L167">
                <polygon
                    className="path"
                    points="1289.05 149.54 1288.04 169.85 1220.85 170.82 1221.88 150.51 1289.05 149.54"
                />
            </g>
            <g id="L168">
                <polygon
                    className="path"
                    points="1287.9 172.55 1286.91 192.43 1219.71 193.4 1220.72 173.51 1287.9 172.55"
                />
            </g>
            <g id="L169">
                <polygon
                    className="path"
                    points="1286.77 195.13 1285.76 215.57 1218.55 216.55 1219.57 196.09 1286.77 195.13"
                />
            </g>
            <g id="L170">
                <polygon
                    className="path"
                    points="1285.62 218.27 1284.58 239.13 1217.36 240.1 1218.41 219.24 1285.62 218.27"
                />
            </g>
            <g id="L173">
                <polygon
                    className="path"
                    points="1237.67 242.51 1235.73 285.82 1215.04 286.31 1217.22 242.81 1237.67 242.51"
                />
            </g>
            <g id="L172">
                <polygon
                    className="path"
                    points="1260.9 242.17 1258.97 285.27 1238.41 285.75 1240.36 242.46 1260.9 242.17"
                />
            </g>
            <g id="L171">
                <polygon
                    className="path"
                    points="1284.45 241.84 1282.31 284.72 1261.66 285.21 1263.61 242.13 1284.45 241.84"
                />
            </g>
            <g id="L285">
                <polygon
                    className="path"
                    points="1141.04 500.06 1139.19 537.38 1132.54 543.05 1071.65 544.55 1073.83 501.03 1141.04 500.06"
                />
            </g>
            <g id="L284">
                <polygon
                    className="path"
                    points="1142.22 476.5 1141.18 497.37 1073.97 498.33 1075.02 477.47 1142.22 476.5"
                />
            </g>
            <g id="L283">
                <polygon
                    className="path"
                    points="1143.37 453.36 1142.36 473.81 1075.15 474.78 1076.18 454.32 1143.37 453.36"
                />
            </g>
            <g id="L282">
                <polygon
                    className="path"
                    points="1144.5 430.78 1143.5 450.66 1076.32 451.63 1077.33 431.74 1144.5 430.78"
                />
            </g>
            <g id="L281">
                <polygon
                    className="path"
                    points="1145.65 407.77 1144.63 428.08 1077.46 429.05 1078.49 408.73 1145.65 407.77"
                />
            </g>
            <g id="L280">
                <polygon
                    className="path"
                    points="1146.8 384.58 1145.79 405.08 1078.62 406.05 1079.65 385.55 1146.8 384.58"
                />
            </g>
            <g id="L279">
                <polygon
                    className="path"
                    points="1147.92 362.11 1146.85 383.82 1146.81 381.89 1079.79 382.85 1080.78 363.08 1147.92 362.11"
                />
            </g>
            <g id="L278">
                <polygon
                    className="path"
                    points="1150.26 315.3 1148.06 359.41 1080.92 360.38 1083.11 316.91 1150.26 315.3"
                />
            </g>
            <g id="L65">
                <polygon
                    className="path"
                    points="1363.02 492.1 1360.88 535 1293.61 536.59 1295.79 493.07 1363.02 492.1"
                />
            </g>
            <g id="L64">
                <polygon
                    className="path"
                    points="1364.19 468.54 1363.15 489.4 1295.93 490.37 1296.98 469.51 1364.19 468.54"
                />
            </g>
            <g id="L63">
                <polygon
                    className="path"
                    points="1365.34 445.39 1364.33 465.85 1297.12 466.81 1298.15 446.36 1365.34 445.39"
                />
            </g>
            <g id="L62">
                <polygon
                    className="path"
                    points="1366.48 422.83 1365.48 442.7 1298.28 443.66 1299.29 423.78 1366.48 422.83"
                />
            </g>
            <g id="L61">
                <polygon
                    className="path"
                    points="1367.62 399.81 1366.6 420.12 1299.42 421.08 1300.45 400.78 1367.62 399.81"
                />
            </g>
            <g id="L60">
                <polygon
                    className="path"
                    points="1368.77 376.62 1367.76 397.12 1300.59 398.09 1301.61 377.59 1368.77 376.62"
                />
            </g>
            <g id="L59">
                <polygon
                    className="path"
                    points="1369.9 354.14 1368.81 375.95 1368.78 373.92 1301.75 374.88 1302.75 355.11 1369.9 354.14"
                />
            </g>
            <g id="L58">
                <polygon
                    className="path"
                    points="1326.39 308.44 1324.43 352.11 1302.88 352.41 1305.07 308.95 1326.39 308.44"
                />
            </g>
            <g id="L57">
                <polygon
                    className="path"
                    points="1349.34 307.87 1347.37 351.77 1327.13 352.07 1329.1 308.37 1349.34 307.87"
                />
            </g>
            <g id="L56">
                <polygon
                    className="path"
                    points="1372.23 307.33 1370.03 351.44 1350.07 351.73 1352.03 307.81 1372.23 307.33"
                />
            </g>
            <g id="L176">
                <polygon
                    className="path"
                    points="1234.33 312.75 1232.36 356.42 1210.83 356.72 1213.01 313.26 1234.33 312.75"
                />
            </g>
            <g id="L175">
                <polygon
                    className="path"
                    points="1257.26 312.19 1255.3 356.08 1235.07 356.37 1237.03 312.68 1257.26 312.19"
                />
            </g>
            <g id="L174">
                <polygon
                    className="path"
                    points="1280.17 311.64 1277.96 355.75 1258 356.04 1259.97 312.12 1280.17 311.64"
                />
            </g>
            <g id="L177">
                <polygon
                    className="path"
                    points="1277.83 358.45 1276.76 380.16 1276.72 378.23 1209.69 379.19 1210.69 359.41 1277.83 358.45"
                />
            </g>
            <g id="L178">
                <polygon
                    className="path"
                    points="1276.71 380.93 1275.69 401.42 1208.52 402.39 1209.56 381.9 1276.71 380.93"
                />
            </g>
            <g id="L179">
                <polygon
                    className="path"
                    points="1275.56 404.11 1274.54 424.42 1207.37 425.39 1208.39 405.08 1275.56 404.11"
                />
            </g>
            <g id="L180">
                <polygon
                    className="path"
                    points="1274.4 427.13 1273.41 447.01 1206.23 447.97 1207.23 428.09 1274.4 427.13"
                />
            </g>
            <g id="L181">
                <polygon
                    className="path"
                    points="1273.28 449.7 1272.26 470.15 1205.06 471.11 1206.09 450.67 1273.28 449.7"
                />
            </g>
            <g id="L182">
                <polygon
                    className="path"
                    points="1272.13 472.85 1271.08 493.71 1203.88 494.68 1204.93 473.81 1272.13 472.85"
                />
            </g>
            <g id="L183">
                <polygon
                    className="path"
                    points="1270.95 496.41 1268.81 539.29 1206.02 540.25 1201.76 536.58 1203.74 497.38 1270.95 496.41"
                />
            </g>
        </svg>
    );
}

function MasterplanSVGMovil() {
    return (
        <svg
            version="1.1"
            viewBox="0 0 1127 2008"
            id="masterplan"
            className="absolute top-0 left-0"
        >
            <g id="L55" data-name="55">
                <polygon
                    class="path"
                    points="717.59 657.16 715.46 704.58 692.81 705.12 695.21 657.49 717.59 657.16"
                />
            </g>
            <g id="L54" data-name="54">
                <polygon
                    class="path"
                    points="743.02 656.8 740.9 703.98 718.41 704.52 720.53 657.12 743.02 656.8"
                />
            </g>
            <g id="L53" data-name="53">
                <polygon
                    class="path"
                    points="768.79 656.43 766.45 703.38 743.86 703.91 745.98 656.76 768.79 656.43"
                />
            </g>
            <g id="L52" data-name="52">
                <polygon
                    class="path"
                    points="770.08 630.64 768.94 653.47 695.36 654.53 696.51 631.7 770.08 630.64"
                />
            </g>
            <g id="L51" data-name="51">
                <polygon
                    class="path"
                    points="771.34 605.31 770.22 627.69 696.66 628.75 697.79 606.36 771.34 605.31"
                />
            </g>
            <g id="L50" data-name="50">
                <polygon
                    class="path"
                    points="772.57 580.59 771.49 602.35 697.94 603.41 699.03 581.64 772.57 580.59"
                />
            </g>
            <g id="L49" data-name="49">
                <polygon
                    class="path"
                    points="773.83 555.4 772.72 577.63 699.18 578.69 700.3 556.46 773.83 555.4"
                />
            </g>
            <g id="L48" data-name="48">
                <polygon
                    class="path"
                    points="775.09 530.02 773.97 552.45 700.45 553.51 701.58 531.08 775.09 530.02"
                />
            </g>
            <g id="L47" data-name="47">
                <polygon
                    class="path"
                    points="776.32 505.41 775.13 529.23 775.1 527.07 701.73 528.13 702.82 506.47 776.32 505.41"
                />
            </g>
            <g id="L46" data-name="46">
                <polygon
                    class="path"
                    points="728.71 455.39 726.55 503.19 702.97 503.53 705.37 455.95 728.71 455.39"
                />
            </g>
            <g id="L45" data-name="45">
                <polygon
                    class="path"
                    points="753.81 454.78 751.66 502.83 729.51 503.15 731.66 455.32 753.81 454.78"
                />
            </g>
            <g id="L44" data-name="44">
                <polygon
                    class="path"
                    points="778.87 454.18 776.46 502.47 754.6 502.79 756.77 454.71 778.87 454.18"
                />
            </g>
            <g id="L85" data-name="85">
                <polygon
                    class="path"
                    points="723.65 1488.42 721.31 1535.37 700.75 1535.86 702.87 1488.72 723.65 1488.42"
                />
            </g>
            <g id="L86" data-name="86">
                <polygon
                    class="path"
                    points="699.91 1488.76 697.79 1535.93 675.29 1536.46 677.42 1489.08 699.91 1488.76"
                />
            </g>
            <g id="L87" data-name="87">
                <polygon
                    class="path"
                    points="674.47 1489.12 672.34 1536.53 647.68 1537.11 650.08 1489.48 674.47 1489.12"
                />
            </g>
            <g id="L73" data-name="73">
                <polygon
                    class="path"
                    points="738.41 1211.1 736.07 1258.05 713.48 1258.58 715.6 1211.43 738.41 1211.1"
                />
            </g>
            <g id="L74" data-name="74">
                <polygon
                    class="path"
                    points="712.65 1211.47 710.52 1258.65 688.04 1259.19 690.16 1211.79 712.65 1211.47"
                />
            </g>
            <g id="L75" data-name="75">
                <polygon
                    class="path"
                    points="687.21 1211.83 685.08 1259.26 662.44 1259.79 664.84 1212.16 687.21 1211.83"
                />
            </g>
            <g id="L72" data-name="72">
                <polygon
                    class="path"
                    points="739.7 1185.31 738.56 1208.15 664.99 1209.2 666.14 1186.37 739.7 1185.31"
                />
            </g>
            <g id="L71" data-name="71">
                <polygon
                    class="path"
                    points="740.96 1159.99 739.85 1182.36 666.29 1183.42 667.41 1161.03 740.96 1159.99"
                />
            </g>
            <g id="L70" data-name="70">
                <polygon
                    class="path"
                    points="742.19 1135.27 741.11 1157.03 667.56 1158.09 668.66 1136.32 742.19 1135.27"
                />
            </g>
            <g id="L69" data-name="69">
                <polygon
                    class="path"
                    points="743.45 1110.08 742.34 1132.31 668.81 1133.37 669.93 1111.14 743.45 1110.08"
                />
            </g>
            <g id="L68" data-name="68">
                <polygon
                    class="path"
                    points="744.72 1084.69 743.6 1107.13 670.08 1108.19 671.21 1085.75 744.72 1084.69"
                />
            </g>
            <g id="L67" data-name="67">
                <polygon
                    class="path"
                    points="745.94 1060.09 744.76 1083.9 744.72 1081.74 671.35 1082.8 672.44 1061.15 745.94 1060.09"
                />
            </g>
            <g id="L66" data-name="66">
                <polygon
                    class="path"
                    points="748.5 1008.85 746.09 1057.14 672.59 1058.2 674.99 1010.62 748.5 1008.85"
                />
            </g>
            <g id="L185" data-name="185">
                <polygon
                    class="path"
                    points="644.78 1063.66 643.59 1087.47 643.56 1085.31 570.4 1086.36 571.52 1064.72 644.78 1063.66"
                />
            </g>
            <g id="L186" data-name="186">
                <polygon
                    class="path"
                    points="643.55 1088.26 642.43 1110.7 569.09 1111.76 570.25 1089.32 643.55 1088.26"
                />
            </g>
            <g id="L187" data-name="187">
                <polygon
                    class="path"
                    points="642.28 1113.65 641.18 1135.88 567.79 1136.94 568.94 1114.71 642.28 1113.65"
                />
            </g>
            <g id="L188" data-name="188">
                <polygon
                    class="path"
                    points="641.03 1138.84 639.94 1160.6 566.52 1161.66 567.64 1139.89 641.03 1138.84"
                />
            </g>
            <g id="L189" data-name="189">
                <polygon
                    class="path"
                    points="639.8 1163.56 638.68 1185.93 565.21 1186.99 566.37 1164.6 639.8 1163.56"
                />
            </g>
            <g id="L190" data-name="190">
                <polygon
                    class="path"
                    points="638.54 1188.88 637.4 1211.72 563.88 1212.77 565.06 1189.94 638.54 1188.88"
                />
            </g>
            <g id="L193" data-name="193">
                <polygon
                    class="path"
                    points="586.05 1215.41 583.91 1262.83 561.27 1263.36 563.73 1215.73 586.05 1215.41"
                />
            </g>
            <g id="L192" data-name="192">
                <polygon
                    class="path"
                    points="611.48 1215.04 609.36 1262.22 586.87 1262.76 588.99 1215.37 611.48 1215.04"
                />
            </g>
            <g id="L191" data-name="191">
                <polygon
                    class="path"
                    points="637.25 1214.68 634.91 1261.62 612.31 1262.15 614.43 1215 637.25 1214.68"
                />
            </g>
            <g id="L184" data-name="184">
                <polygon
                    class="path"
                    points="647.33 1012.42 644.92 1060.71 571.67 1061.77 573.89 1018.75 579.47 1014.06 647.33 1012.42"
                />
            </g>
            <g id="L293" data-name="293">
                <polygon
                    class="path"
                    points="493.88 1219.18 491.46 1266.13 417.83 1267.87 420.29 1220.24 420.29 1220.23 493.88 1219.18"
                />
            </g>
            <g id="L292" data-name="292">
                <polygon
                    class="path"
                    points="495.2 1193.39 494.03 1216.22 420.44 1217.28 421.61 1194.45 495.2 1193.39"
                />
            </g>
            <g id="L291" data-name="291">
                <polygon
                    class="path"
                    points="496.5 1168.05 495.35 1190.44 421.77 1191.5 422.92 1169.11 496.5 1168.05"
                />
            </g>
            <g id="L290" data-name="290">
                <polygon
                    class="path"
                    points="497.78 1143.33 496.66 1165.1 423.07 1166.16 424.2 1144.39 497.78 1143.33"
                />
            </g>
            <g id="L289" data-name="289">
                <polygon
                    class="path"
                    points="499.07 1118.15 497.93 1140.38 424.35 1141.44 425.49 1119.21 499.07 1118.15"
                />
            </g>
            <g id="L288" data-name="288">
                <polygon
                    class="path"
                    points="500.37 1092.79 499.22 1115.2 425.65 1116.26 426.8 1093.83 500.37 1092.79"
                />
            </g>
            <g id="L287" data-name="287">
                <polygon
                    class="path"
                    points="501.64 1068.17 500.53 1089.83 426.95 1090.87 428.07 1069.22 501.64 1068.17"
                />
            </g>
            <g id="L286" data-name="286">
                <polygon
                    class="path"
                    points="504.02 1021.94 501.79 1065.22 428.22 1066.27 430.44 1023.26 436.02 1018.57 500 1017.55 504.02 1021.94"
                />
            </g>
            <g id="L84" data-name="84">
                <polygon
                    class="path"
                    points="724.61 1462.63 723.43 1485.47 650.23 1486.52 651.38 1463.68 724.61 1462.63"
                />
            </g>
            <g id="L83" data-name="83">
                <polygon
                    class="path"
                    points="725.92 1437.3 724.76 1459.69 651.53 1460.73 652.65 1438.35 725.92 1437.3"
                />
            </g>
            <g id="L82" data-name="82">
                <polygon
                    class="path"
                    points="727.2 1412.58 726.07 1434.35 652.8 1435.4 653.9 1413.63 727.2 1412.58"
                />
            </g>
            <g id="L81" data-name="81">
                <polygon
                    class="path"
                    points="728.5 1387.4 727.35 1409.63 654.05 1410.68 655.17 1388.45 728.5 1387.4"
                />
            </g>
            <g id="L80" data-name="80">
                <polygon
                    class="path"
                    points="729.81 1362.01 728.65 1384.44 655.32 1385.5 656.45 1363.06 729.81 1362.01"
                />
            </g>
            <g id="L79" data-name="79">
                <polygon
                    class="path"
                    points="731.08 1337.41 729.96 1359.06 656.59 1360.12 657.69 1338.46 731.08 1337.41"
                />
            </g>
            <g id="L76" data-name="76">
                <polygon
                    class="path"
                    points="733.73 1286.17 731.23 1334.45 709.47 1334.77 711.63 1286.7 733.73 1286.17"
                />
            </g>
            <g id="L77" data-name="77">
                <polygon
                    class="path"
                    points="708.68 1286.77 706.52 1334.81 684.37 1335.13 686.52 1287.31 708.68 1286.77"
                />
            </g>
            <g id="L78" data-name="78">
                <polygon
                    class="path"
                    points="683.57 1287.38 681.42 1335.17 657.83 1335.51 660.23 1287.94 683.57 1287.38"
                />
            </g>
            <g id="L164" data-name="164">
                <polygon
                    class="path"
                    points="626.95 458.38 624.8 506.18 601.22 506.52 603.62 458.94 626.95 458.38"
                />
            </g>
            <g id="L163" data-name="163">
                <polygon
                    class="path"
                    points="652.06 457.77 649.91 505.82 627.76 506.14 629.91 458.31 652.06 457.77"
                />
            </g>
            <g id="L162" data-name="162">
                <polygon
                    class="path"
                    points="677.12 457.17 674.71 505.46 652.85 505.78 655.02 457.7 677.12 457.17"
                />
            </g>
            <g id="L165" data-name="165">
                <polygon
                    class="path"
                    points="674.57 508.41 673.38 532.22 673.35 530.06 599.98 531.12 601.07 509.47 674.57 508.41"
                />
            </g>
            <g id="L166" data-name="166">
                <polygon
                    class="path"
                    points="673.34 533.01 672.22 555.45 598.7 556.5 599.83 534.07 673.34 533.01"
                />
            </g>
            <g id="L167" data-name="167">
                <polygon
                    class="path"
                    points="672.08 558.39 670.97 580.63 597.43 581.68 598.55 559.45 672.08 558.39"
                />
            </g>
            <g id="L168" data-name="168">
                <polygon
                    class="path"
                    points="670.82 583.58 669.74 605.34 596.19 606.4 597.28 584.63 670.82 583.58"
                />
            </g>
            <g id="L169" data-name="169">
                <polygon
                    class="path"
                    points="669.59 608.3 668.47 630.68 594.91 631.74 596.04 609.35 669.59 608.3"
                />
            </g>
            <g id="L170" data-name="170">
                <polygon
                    class="path"
                    points="668.33 633.63 667.19 656.46 593.61 657.52 594.76 634.69 668.33 633.63"
                />
            </g>
            <g id="L173" data-name="173">
                <polygon
                    class="path"
                    points="615.84 660.15 613.7 707.58 591.06 708.11 593.46 660.48 615.84 660.15"
                />
            </g>
            <g id="L172" data-name="172">
                <polygon
                    class="path"
                    points="641.27 659.79 639.15 706.97 616.66 707.51 618.78 660.11 641.27 659.79"
                />
            </g>
            <g id="L171" data-name="171">
                <polygon
                    class="path"
                    points="667.04 659.42 664.7 706.37 642.1 706.9 644.23 659.75 667.04 659.42"
                />
            </g>
            <g id="L285" data-name="285">
                <polygon
                    class="path"
                    points="510.08 942.09 508.04 982.92 500.76 989.13 434.1 990.77 436.5 943.15 510.08 942.09"
                />
            </g>
            <g id="L284" data-name="284">
                <polygon
                    class="path"
                    points="511.36 916.29 510.22 939.13 436.65 940.19 437.8 917.35 511.36 916.29"
                />
            </g>
            <g id="L283" data-name="283">
                <polygon
                    class="path"
                    points="512.62 890.97 511.51 913.34 437.95 914.4 439.07 892.02 512.62 890.97"
                />
            </g>
            <g id="L282" data-name="282">
                <polygon
                    class="path"
                    points="513.86 866.25 512.77 888.01 439.22 889.07 440.32 867.3 513.86 866.25"
                />
            </g>
            <g id="L281" data-name="281">
                <polygon
                    class="path"
                    points="515.11 841.06 514 863.29 440.47 864.35 441.59 842.12 515.11 841.06"
                />
            </g>
            <g id="L280" data-name="280">
                <polygon
                    class="path"
                    points="516.38 815.67 515.26 838.11 441.74 839.17 442.87 816.73 516.38 815.67"
                />
            </g>
            <g id="L279" data-name="279">
                <polygon
                    class="path"
                    points="517.61 791.07 516.42 814.9 516.38 812.73 443.01 813.78 444.1 792.13 517.61 791.07"
                />
            </g>
            <g id="L278" data-name="278">
                <polygon
                    class="path"
                    points="520.16 739.83 517.75 788.12 444.25 789.18 446.65 741.6 520.16 739.83"
                />
            </g>
            <g id="L65" data-name="65">
                <polygon
                    class="path"
                    points="753.04 933.37 750.7 980.32 677.06 982.06 679.46 934.43 753.04 933.37"
                />
            </g>
            <g id="L64" data-name="64">
                <polygon
                    class="path"
                    points="754.33 907.58 753.19 930.41 679.61 931.47 680.76 908.63 754.33 907.58"
                />
            </g>
            <g id="L63" data-name="63">
                <polygon
                    class="path"
                    points="755.59 882.25 754.47 904.63 680.91 905.69 682.04 883.3 755.59 882.25"
                />
            </g>
            <g id="L62" data-name="62">
                <polygon
                    class="path"
                    points="756.82 857.53 755.74 879.29 682.19 880.35 683.28 858.58 756.82 857.53"
                />
            </g>
            <g id="L61" data-name="61">
                <polygon
                    class="path"
                    points="758.08 832.34 756.97 854.57 683.43 855.63 684.55 833.4 758.08 832.34"
                />
            </g>
            <g id="L60" data-name="60">
                <polygon
                    class="path"
                    points="759.34 806.96 758.22 829.39 684.7 830.45 685.83 808.02 759.34 806.96"
                />
            </g>
            <g id="L59" data-name="59">
                <polygon
                    class="path"
                    points="760.57 782.35 759.38 806.17 759.35 804.01 685.98 805.07 687.07 783.41 760.57 782.35"
                />
            </g>
            <g id="L58" data-name="58">
                <polygon
                    class="path"
                    points="712.96 732.33 710.8 780.12 687.22 780.46 689.62 732.89 712.96 732.33"
                />
            </g>
            <g id="L57" data-name="57">
                <polygon
                    class="path"
                    points="738.06 731.72 735.91 779.76 713.76 780.08 715.91 732.26 738.06 731.72"
                />
            </g>
            <g id="L56" data-name="56">
                <polygon
                    class="path"
                    points="763.12 731.12 760.71 779.41 738.86 779.72 741.02 731.65 763.12 731.12"
                />
            </g>
            <g id="L176" data-name="176">
                <polygon
                    class="path"
                    points="612.18 737.04 610.03 784.84 586.44 785.18 588.84 737.6 612.18 737.04"
                />
            </g>
            <g id="L175" data-name="175">
                <polygon
                    class="path"
                    points="637.29 736.43 635.14 784.48 612.99 784.8 615.14 736.97 637.29 736.43"
                />
            </g>
            <g id="L174" data-name="174">
                <polygon
                    class="path"
                    points="662.35 735.83 659.94 784.12 638.08 784.44 640.24 736.36 662.35 735.83"
                />
            </g>
            <g id="L177" data-name="177">
                <polygon
                    class="path"
                    points="659.8 787.07 658.72 808.73 585.21 809.78 586.3 788.13 659.8 787.07"
                />
            </g>
            <g id="L178" data-name="178">
                <polygon
                    class="path"
                    points="658.57 811.68 657.45 834.11 583.93 835.17 585.06 812.73 658.57 811.68"
                />
            </g>
            <g id="L179" data-name="179">
                <polygon
                    class="path"
                    points="657.3 837.05 656.2 859.29 582.66 860.35 583.78 838.11 657.3 837.05"
                />
            </g>
            <g id="L180" data-name="180">
                <polygon
                    class="path"
                    points="656.05 862.25 654.96 884.01 581.41 885.06 582.51 863.29 656.05 862.25"
                />
            </g>
            <g id="L181" data-name="181">
                <polygon
                    class="path"
                    points="654.82 886.96 653.7 909.34 580.14 910.4 581.27 888.01 654.82 886.96"
                />
            </g>
            <g id="L182" data-name="182">
                <polygon
                    class="path"
                    points="653.55 912.29 652.42 935.12 578.84 936.18 579.99 913.35 653.55 912.29"
                />
            </g>
            <g id="L183" data-name="183">
                <polygon
                    class="path"
                    points="652.27 938.08 649.93 985.02 581.19 986.08 576.53 982.05 578.69 939.14 652.27 938.08"
                />
            </g>
        </svg>
    );
}

export default Masterplan;
