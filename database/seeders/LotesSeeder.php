<?php

namespace Database\Seeders;
use App\Models\Lotificacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use File;

class LotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Lotificacion::truncate();

		$json = File::get("database/data/lotes.json");
        $lotes = json_decode($json);

		foreach ((array) $lotes as $value) {
            Lotificacion::create([
				"fondo" => $value -> fondo,
				"frente" => $value -> frente,
				"lote" => $value -> lote,
				"m2" => $value -> m2,
				"precio" => $value -> precio,
				"precio12" => $value -> precio12,
				"precio18" => $value -> precio18,
				"precio36" => $value -> precio36,
				"status" => $value -> status
            ]);
        }
    }
}
