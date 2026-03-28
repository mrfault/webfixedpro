<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hero_sections', function (Blueprint $table) {
            $table->id();
            $table->string('badge_text')->default('Web Agency');
            $table->string('heading_line1')->default('We build websites');
            $table->string('heading_line2')->default('that drive results.');
            $table->text('subtitle');
            $table->string('cta_primary_text')->default('Start a Project');
            $table->string('cta_secondary_text')->default('See Our Work');
            $table->string('trust_text')->default('Trusted by 200+ businesses across the US');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};
