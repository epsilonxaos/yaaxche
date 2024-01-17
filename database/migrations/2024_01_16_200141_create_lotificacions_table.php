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
			$table->double('fondo', 8, 2);
			$table->double('frente', 8, 2);
			$table->integer('lote');
			$table->double('m2', 8, 2);
			$table->integer('precio');
			$table->integer('precio12');
			$table->integer('precio18');
			$table->integer('precio36');
			$table->tinyInteger('status')->default(1);
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
