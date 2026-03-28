<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'badge_text',
        'heading_line1',
        'heading_line2',
        'subtitle',
        'cta_primary_text',
        'cta_secondary_text',
        'trust_text',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
