<?php

namespace Database\Seeders;

use App\Models\Lotificacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class LotesSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */

	public function run(): void
	{
		$json = [
			[
				"fondo" => "33.68",
				"frente" => "12.00",
				"lote" => "1",
				"m2" => "404.40",
				"precio" => "2102880",
				"precio12" => "2224200",
				"precio18" => "2305080",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "33.72",
				"frente" => "12.00",
				"lote" => "2",
				"m2" => "404.95",
				"precio" => "2105740",
				"precio12" => "2227225",
				"precio18" => "2308215",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "33.77",
				"frente" => "12.00",
				"lote" => "3",
				"m2" => "405.50",
				"precio" => "2108600",
				"precio12" => "2230250",
				"precio18" => "2311350",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "33.82",
				"frente" => "12.00",
				"lote" => "4",
				"m2" => "406.05",
				"precio" => "2111460",
				"precio12" => "2233275",
				"precio18" => "2314485",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "33.86",
				"frente" => "12.00",
				"lote" => "5",
				"m2" => "406.61",
				"precio" => "2114372",
				"precio12" => "2236355",
				"precio18" => "2317677",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "33.91",
				"frente" => "12.00",
				"lote" => "6",
				"m2" => "407.16",
				"precio" => "2117232",
				"precio12" => "2239380",
				"precio18" => "2320812",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "33.95",
				"frente" => "12.00",
				"lote" => "7",
				"m2" => "407.71",
				"precio" => "2120092",
				"precio12" => "2242405",
				"precio18" => "2323947",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.0",
				"frente" => "12.00",
				"lote" => "8",
				"m2" => "408.26",
				"precio" => "2122952",
				"precio12" => "2245430",
				"precio18" => "2327082",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.05",
				"frente" => "12.00",
				"lote" => "9",
				"m2" => "408.81",
				"precio" => "2125812",
				"precio12" => "2248455",
				"precio18" => "2330217",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.09",
				"frente" => "12.00",
				"lote" => "10",
				"m2" => "409.37",
				"precio" => "2128724",
				"precio12" => "2251535",
				"precio18" => "2333409",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.14",
				"frente" => "12.00",
				"lote" => "11",
				"m2" => "409.92",
				"precio" => "2131584",
				"precio12" => "2254560",
				"precio18" => "2336544",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.18",
				"frente" => "12.00",
				"lote" => "12",
				"m2" => "410.47",
				"precio" => "2134444",
				"precio12" => "2257585",
				"precio18" => "2339679",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.23",
				"frente" => "12.00",
				"lote" => "13",
				"m2" => "411.02",
				"precio" => "2137304",
				"precio12" => "2260610",
				"precio18" => "2342814",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.28",
				"frente" => "12.00",
				"lote" => "14",
				"m2" => "411.58",
				"precio" => "2140216",
				"precio12" => "2263690",
				"precio18" => "2346006",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.32",
				"frente" => "12.00",
				"lote" => "15",
				"m2" => "411.33",
				"precio" => "2138916",
				"precio12" => "2262315",
				"precio18" => "2344581",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "33.57",
				"frente" => "12.50",
				"lote" => "16",
				"m2" => "419.97",
				"precio" => "2183844",
				"precio12" => "2309835",
				"precio18" => "2393829",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "52.00",
				"frente" => "12.00",
				"lote" => "17",
				"m2" => "629.12",
				"precio" => "3271424",
				"precio12" => "3460160",
				"precio18" => "3585984",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "12.00",
				"lote" => "18",
				"m2" => "405.37",
				"precio" => "2107924",
				"precio12" => "2229535",
				"precio18" => "2310609",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "19",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "20",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "21",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "22",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "23",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "24",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "25",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "26",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "27",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "28",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "29",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "30",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "31",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "32",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "33",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "34",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "35",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "36",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "37",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "38",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "39",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "40",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "41",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "42",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "12.00",
				"lote" => "43",
				"m2" => "405.37",
				"precio" => "2107924",
				"precio12" => "2229535",
				"precio18" => "2310609",
				"precio36" => "0",
				"status" => "2"
			],
			[
				"fondo" => "34.00",
				"frente" => "12.85",
				"lote" => "44",
				"m2" => "598.83",
				"precio" => "3113916",
				"precio12" => "3293565",
				"precio18" => "3413331",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "12.00",
				"lote" => "45",
				"m2" => "402.80",
				"precio" => "2094560",
				"precio12" => "2215400",
				"precio18" => "2295960",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "12.00",
				"lote" => "46",
				"m2" => "405.64",
				"precio" => "2109328",
				"precio12" => "2231020",
				"precio18" => "2312148",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "47",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "48",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "49",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "50",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "51",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "52",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "3"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "53",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "54",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "55",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "56",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "57",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "58",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "59",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "60",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "61",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "62",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "63",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "64",
				"m2" => "346.05",
				"precio" => "1799460",
				"precio12" => "1903275",
				"precio18" => "1972485",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "41.50",
				"frente" => "12.00",
				"lote" => "65",
				"m2" => "485.78",
				"precio" => "2526056",
				"precio12" => "2671790",
				"precio18" => "2768946",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "66",
				"m2" => "340.00",
				"precio" => "1768000",
				"precio12" => "1870000",
				"precio18" => "1938000",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "34.00",
				"frente" => "10.00",
				"lote" => "67",
				"m2" => "346.05",
				"precio" => "1799460",
				"precio12" => "1903275",
				"precio18" => "1972485",
				"precio36" => "0",
				"status" => "1"
			],
			[
				"fondo" => "41.50",
				"frente" => "12.00",
				"lote" => "68",
				"m2" => "485.78",
				"precio" => "2526056",
				"precio12" => "2671790",
				"precio18" => "2768946",
				"precio36" => "0",
				"status" => "1"
			]
		];


		Lotificacion::truncate();

		// $json = json_encode(File::get(database_path("data/lotes.json")));
		// $lotes = (array)json_decode($json, true);

		// Log::debug($lotes[0]);

		foreach ($json as  $value) {
			Lotificacion::create([
				"fondo" => $value['fondo'],
				"frente" => $value['frente'],
				"lote" => $value['lote'],
				"m2" => $value['m2'],
				"precio" => $value['precio'],
				"precio12" => $value['precio12'],
				"precio18" => $value['precio18'],
				"precio36" => $value['precio36'],
				"status" => $value['status']
			]);
		}
	}
}
