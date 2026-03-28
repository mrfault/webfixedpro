<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use App\Models\HeroSection;
use App\Models\Project;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function hero(): JsonResponse
    {
        $hero = HeroSection::where('is_active', true)->latest()->first();

        if (!$hero) {
            return response()->json(['data' => null]);
        }

        return response()->json([
            'data' => [
                'id' => $hero->id,
                'badge_text' => $hero->badge_text,
                'heading_line1' => $hero->heading_line1,
                'heading_line2' => $hero->heading_line2,
                'subtitle' => $hero->subtitle,
                'cta_primary_text' => $hero->cta_primary_text,
                'cta_secondary_text' => $hero->cta_secondary_text,
                'trust_text' => $hero->trust_text,
            ],
        ]);
    }

    public function services(): JsonResponse
    {
        $services = Service::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'icon', 'title', 'description', 'sort_order']);

        return response()->json(['data' => $services]);
    }

    public function projects(): JsonResponse
    {
        $projects = Project::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'title', 'category', 'description', 'image_url', 'project_url', 'tags', 'sort_order']);

        return response()->json(['data' => $projects]);
    }

    public function testimonials(): JsonResponse
    {
        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'role', 'company', 'quote', 'rating', 'initials', 'sort_order']);

        return response()->json(['data' => $testimonials]);
    }

    public function settings(): JsonResponse
    {
        $settings = SiteSetting::all()
            ->groupBy('group')
            ->map(function ($group) {
                return $group->pluck('value', 'key');
            });

        return response()->json(['data' => $settings]);
    }

    public function submitContact(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        ContactSubmission::create($validated);

        return response()->json([
            'message' => 'Thank you for your message. We will get back to you soon!',
        ], 201);
    }
}
