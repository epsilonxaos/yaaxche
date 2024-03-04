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
		Schema::create('lotificacions', function (Blueprint $table) {
			$table->id();
			$table->integer('etapa');
			$table->integer('lote');
			$table->string('vista', 191);
			$table->double('frente', 8, 2);
			$table->double('fondo', 8, 2);
			$table->double('m2', 8, 2);
			$table->double('precio_total', 8, 2);
			$table->tinyInteger('status')->default(1);
			$table->double('enganche', 8, 2);
			$table->double('precio_48', 8, 2);
			$table->double('precio_36', 8, 2);
			$table->double('precio_24', 8, 2);
			$table->double('precio_12', 8, 2);
			$table->double('precio_6', 8, 2);
			$table->double('contado', 8, 2);
			$table->double('apartado', 8, 2);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('lotificacions');
	}
};
