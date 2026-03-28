<?php

namespace Database\Seeders;

use App\Models\ContactSubmission;
use App\Models\HeroSection;
use App\Models\Project;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // Admin user
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@webfixedpro.com',
            'password' => bcrypt('admin123'),
        ]);

        // Hero Section
        HeroSection::create([
            'badge_text' => 'Web Agency',
            'heading_line1' => 'We build websites',
            'heading_line2' => 'that drive results.',
            'subtitle' => 'WebFixedPro is a design and development studio specializing in high-performance websites, web apps, and digital experiences for ambitious businesses.',
            'cta_primary_text' => 'Start a Project',
            'cta_secondary_text' => 'See Our Work',
            'trust_text' => 'Trusted by 200+ businesses across the US',
            'is_active' => true,
        ]);

        // Services
        $services = [
            [
                'icon' => 'palette',
                'title' => 'Web Design',
                'description' => 'Beautiful, conversion-focused designs tailored to your brand and audience.',
                'sort_order' => 1,
            ],
            [
                'icon' => 'code',
                'title' => 'Web Development',
                'description' => 'Custom-built websites using modern technologies for speed, security, and scalability.',
                'sort_order' => 2,
            ],
            [
                'icon' => 'shopping-cart',
                'title' => 'E-Commerce',
                'description' => 'Online stores that make buying effortless and drive revenue growth.',
                'sort_order' => 3,
            ],
            [
                'icon' => 'trending-up',
                'title' => 'SEO & Performance',
                'description' => 'Data-driven optimization to improve your search rankings and site speed.',
                'sort_order' => 4,
            ],
            [
                'icon' => 'layers',
                'title' => 'UI/UX Design',
                'description' => 'User-centered design that creates intuitive, delightful digital experiences.',
                'sort_order' => 5,
            ],
            [
                'icon' => 'headphones',
                'title' => 'Ongoing Support',
                'description' => 'Dedicated support and maintenance to keep your website running flawlessly.',
                'sort_order' => 6,
            ],
        ];

        foreach ($services as $service) {
            Service::create(array_merge($service, ['is_active' => true]));
        }

        // Projects
        $projects = [
            [
                'title' => 'Meridian Financial',
                'category' => 'Web Design',
                'description' => 'A modern financial services website with clean design and intuitive navigation.',
                'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
                'tags' => ['finance', 'corporate', 'responsive'],
                'sort_order' => 1,
            ],
            [
                'title' => 'Atlas E-Commerce',
                'category' => 'E-Commerce',
                'description' => 'A full-featured online store with seamless checkout experience.',
                'image_url' => 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80',
                'tags' => ['ecommerce', 'retail', 'shopify'],
                'sort_order' => 2,
            ],
            [
                'title' => 'Vertex SaaS',
                'category' => 'Landing Pages',
                'description' => 'High-converting landing page for a SaaS analytics platform.',
                'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
                'tags' => ['saas', 'landing-page', 'conversion'],
                'sort_order' => 3,
            ],
            [
                'title' => 'Bloom Studio',
                'category' => 'Web Design',
                'description' => 'A creative studio portfolio showcasing artistic work and services.',
                'image_url' => 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80',
                'tags' => ['creative', 'portfolio', 'design'],
                'sort_order' => 4,
            ],
            [
                'title' => 'NovaTech Store',
                'category' => 'E-Commerce',
                'description' => 'A tech products e-commerce platform with advanced filtering.',
                'image_url' => 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=500&fit=crop&q=80',
                'tags' => ['tech', 'ecommerce', 'electronics'],
                'sort_order' => 5,
            ],
            [
                'title' => 'Skyline Launch',
                'category' => 'Landing Pages',
                'description' => 'A product launch landing page with bold visuals and clear CTAs.',
                'image_url' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80',
                'tags' => ['launch', 'mobile', 'landing-page'],
                'sort_order' => 6,
            ],
        ];

        foreach ($projects as $project) {
            Project::create(array_merge($project, ['is_active' => true]));
        }

        // Testimonials
        $testimonials = [
            [
                'name' => 'Sarah Mitchell',
                'role' => 'CEO',
                'company' => 'Greenleaf Co.',
                'quote' => 'WebFixedPro transformed our online presence completely. Our new website loads in under 2 seconds and our conversion rate doubled within the first month.',
                'rating' => 5,
                'initials' => 'SM',
                'sort_order' => 1,
            ],
            [
                'name' => 'James Parker',
                'role' => 'Founder',
                'company' => 'UrbanEdge',
                'quote' => 'The team delivered a stunning e-commerce platform ahead of schedule. Their attention to detail and communication throughout the process was exceptional.',
                'rating' => 5,
                'initials' => 'JP',
                'sort_order' => 2,
            ],
            [
                'name' => 'Emily Chen',
                'role' => 'CTO',
                'company' => 'DataPulse',
                'quote' => 'Working with WebFixedPro was the best investment we made for our startup. They understood our vision perfectly and built exactly what we needed.',
                'rating' => 5,
                'initials' => 'EC',
                'sort_order' => 3,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create(array_merge($testimonial, ['is_active' => true]));
        }

        // Site Settings
        $settings = [
            ['key' => 'contact_email', 'value' => 'hello@webfixedpro.com', 'group' => 'contact'],
            ['key' => 'contact_phone', 'value' => '(555) 123-4567', 'group' => 'contact'],
            ['key' => 'company_name', 'value' => 'WebFixedPro', 'group' => 'general'],
            ['key' => 'company_tagline', 'value' => 'Modern web solutions for ambitious businesses.', 'group' => 'general'],
            ['key' => 'footer_copyright', 'value' => '© 2026 WebFixedPro. All rights reserved.', 'group' => 'general'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::create($setting);
        }
    }
}
