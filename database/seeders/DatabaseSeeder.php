<?php

namespace Database\Seeders;

use bfinlay\SpreadsheetSeeder\SpreadsheetSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		$this->call(PermissionSeeder::class);
		$this->call(AdminSeeder::class);
		// $this->call(LotesSeeder::class);
		$this->call([
			SpreadsheetSeeder::class,
		]);
	}
}
