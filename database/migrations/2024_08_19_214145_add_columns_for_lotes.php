<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::table('lotificacions', function (Blueprint $table) {
			$table->double('manzana', 8, 2)->nullable();
			$table->double('precio_m2', 8, 2)->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('lotificacions', function (Blueprint $table) {
			$table->dropColumn("manzana");
			$table->dropColumn("precio_m2");
		});
	}
};
