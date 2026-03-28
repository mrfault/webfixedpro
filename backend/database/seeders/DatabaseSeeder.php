<?php

namespace Database\Seeders;

use App\Models\ContactSubmission;
use App\Models\HeroSection;
use App\Models\Page;
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
        User::firstOrCreate(
            ['email' => 'admin@webfixedpro.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('admin123'),
            ]
        );

        // Hero Section
        HeroSection::firstOrCreate(['is_active' => true], [
            'badge_text' => 'Web Agency',
            'heading_line1' => 'We build websites',
            'heading_line2' => 'that drive results.',
            'subtitle' => 'WebFixedPro is a design and development studio specializing in high-performance websites, web apps, and digital experiences for ambitious businesses.',
            'cta_primary_text' => 'Start a Project',
            'cta_secondary_text' => 'See Our Work',
            'trust_text' => 'Trusted by 200+ businesses across the US',
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
            Service::firstOrCreate(
                ['title' => $service['title']],
                array_merge($service, ['is_active' => true])
            );
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
            Project::firstOrCreate(
                ['title' => $project['title']],
                array_merge($project, ['is_active' => true])
            );
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
            Testimonial::firstOrCreate(
                ['name' => $testimonial['name']],
                array_merge($testimonial, ['is_active' => true])
            );
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
            SiteSetting::firstOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }

        // Pages
        Page::firstOrCreate(
            ['slug' => 'privacy-policy'],
            [
                'title' => 'Privacy Policy',
                'is_published' => true,
                'content' => '<h2>Introduction</h2>
<p>WebFixedPro ("we", "us", "our") operates the website webfixedpro.com. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services. By accessing or using our website, you agree to the terms of this Privacy Policy.</p>

<h2>Information We Collect</h2>
<h3>Personal Information</h3>
<p>We may collect personal information that you voluntarily provide to us, including:</p>
<ul>
<li>Name</li>
<li>Email address</li>
<li>Phone number</li>
<li>Company name</li>
<li>Any other information you submit through our contact forms or during project consultations</li>
</ul>

<h3>Usage Data</h3>
<p>We automatically collect certain information when you visit our website, including:</p>
<ul>
<li>IP address</li>
<li>Browser type and version</li>
<li>Pages visited and time spent on those pages</li>
<li>Referring website address</li>
<li>Device type and operating system</li>
</ul>

<h3>Cookies and Tracking Technologies</h3>
<p>We use cookies, web beacons, and similar tracking technologies to collect usage data and improve our website experience. For more details, see the Cookies section below.</p>

<h2>How We Use Your Information</h2>
<p>We use the information we collect for the following purposes:</p>
<ul>
<li>To respond to your inquiries and provide customer support</li>
<li>To improve our website, services, and user experience</li>
<li>To send project updates and communications related to our services</li>
<li>To send promotional materials and newsletters (only with your consent)</li>
<li>To analyze website usage and trends</li>
<li>To comply with legal obligations and protect our rights</li>
</ul>

<h2>Information Sharing</h2>
<p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
<ul>
<li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you, including hosting providers, analytics services, and email delivery platforms.</li>
<li><strong>Legal Requirements:</strong> We may disclose your information when required by law, regulation, legal process, or governmental request.</li>
<li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
<li><strong>Protection of Rights:</strong> We may disclose information to protect and defend our rights, property, or safety, or that of our users or the public.</li>
</ul>

<h2>Data Security</h2>
<p>We implement industry-standard security measures to protect your personal information, including:</p>
<ul>
<li>SSL/TLS encryption for data transmitted between your browser and our servers</li>
<li>Secure server infrastructure with regular security updates</li>
<li>Limited access to personal information on a need-to-know basis</li>
<li>Regular security assessments and monitoring</li>
</ul>
<p>While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

<h2>Your Rights</h2>
<p>You have the following rights regarding your personal information:</p>
<ul>
<li><strong>Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
<li><strong>Correction:</strong> You have the right to request correction of any inaccurate or incomplete personal information.</li>
<li><strong>Deletion:</strong> You have the right to request deletion of your personal information, subject to certain legal exceptions.</li>
<li><strong>Opt-Out:</strong> You have the right to opt out of receiving marketing communications from us at any time.</li>
</ul>
<p>To exercise any of these rights, please contact us at hello@webfixedpro.com.</p>

<h2>Cookies</h2>
<p>Our website uses the following types of cookies:</p>
<ul>
<li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</li>
<li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
<li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization.</li>
</ul>
<p>You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>

<h2>Third-Party Links</h2>
<p>Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices, content, or security of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

<h2>Children\'s Privacy</h2>
<p>Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly.</p>

<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>

<h2>Contact Us</h2>
<p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
<p>Email: hello@webfixedpro.com</p>

<p><em>Last updated: March 2026</em></p>',
            ]
        );

        Page::firstOrCreate(
            ['slug' => 'terms-of-service'],
            [
                'title' => 'Terms of Service',
                'is_published' => true,
                'content' => '<h2>Agreement to Terms</h2>
<p>By accessing and using the WebFixedPro website (webfixedpro.com) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>

<h2>Our Services</h2>
<p>WebFixedPro provides professional web design and development services, including but not limited to:</p>
<ul>
<li>Custom web design</li>
<li>Web development</li>
<li>E-commerce solutions</li>
<li>Search engine optimization (SEO)</li>
<li>UI/UX design</li>
<li>Ongoing website support and maintenance</li>
</ul>

<h2>Project Agreements</h2>
<p>Specific project terms, including scope of work, deliverables, timelines, and pricing, will be outlined in individual proposals and/or contracts provided to each client. These project-specific agreements supplement these general Terms of Service.</p>
<ul>
<li>Proposals are valid for 30 days from the date of issue unless otherwise stated.</li>
<li>A signed proposal or contract constitutes agreement to the project terms.</li>
<li>Any changes to the agreed scope of work may result in adjustments to the timeline and cost.</li>
</ul>

<h2>Payment Terms</h2>
<ul>
<li>A 50% deposit is required to begin work on any project unless otherwise agreed in writing.</li>
<li>The remaining balance is due upon project completion and before final files or website access is delivered.</li>
<li>Late payments are subject to a 1.5% monthly interest fee on the outstanding balance.</li>
<li>We accept payment via bank transfer, credit card, or other methods as agreed upon.</li>
<li>All fees are quoted in US dollars unless otherwise specified.</li>
</ul>

<h2>Intellectual Property</h2>
<ul>
<li>Upon receipt of full payment, the client receives ownership rights to all custom design work and code created specifically for their project.</li>
<li>WebFixedPro retains the right to display and reference completed work in our portfolio, case studies, and marketing materials.</li>
<li>Third-party assets, including but not limited to fonts, stock images, plugins, and frameworks, are subject to their respective license terms.</li>
<li>Any pre-existing intellectual property used in the project remains the property of its respective owner.</li>
</ul>

<h2>Client Responsibilities</h2>
<p>To ensure timely and successful project delivery, clients are expected to:</p>
<ul>
<li>Provide all necessary content, images, branding materials, and feedback in a timely manner.</li>
<li>Designate a primary point of contact for project communications.</li>
<li>Review and approve deliverables within the agreed-upon timeframes.</li>
<li>Ensure that all content provided does not infringe on any third-party rights.</li>
</ul>
<p>Delays caused by the client in providing materials or feedback may affect the project timeline and may result in additional charges.</p>

<h2>Revisions</h2>
<ul>
<li>Each project includes a defined number of revision rounds as specified in the project proposal or contract.</li>
<li>Revisions refer to minor modifications to the approved design or functionality, not wholesale redesigns or significant scope changes.</li>
<li>Additional revisions beyond the included rounds may incur extra charges at our standard hourly rate.</li>
</ul>

<h2>Limitation of Liability</h2>
<ul>
<li>WebFixedPro\'s total liability for any claims arising from our services is limited to the total amount paid by the client for the specific project in question.</li>
<li>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.</li>
<li>We are not liable for any delays or failures in performance resulting from circumstances beyond our reasonable control.</li>
</ul>

<h2>Termination</h2>
<ul>
<li>Either party may terminate a project agreement with 14 days written notice to the other party.</li>
<li>In the event of termination, the client is responsible for payment for all work completed up to the date of termination.</li>
<li>Any deposits paid are non-refundable once work has commenced.</li>
<li>Upon termination, all completed deliverables for which payment has been received will be provided to the client.</li>
</ul>

<h2>Warranty</h2>
<ul>
<li>WebFixedPro provides a 30-day warranty period following project launch for any bugs or technical issues directly related to the work we performed.</li>
<li>This warranty does not cover issues caused by changes made by third parties, client modifications, hosting environment changes, or third-party plugin/software updates.</li>
<li>Warranty support is limited to fixing defects and does not include new features or enhancements.</li>
</ul>

<h2>Governing Law</h2>
<p>These Terms of Service are governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.</p>

<h2>Dispute Resolution</h2>
<p>In the event of any dispute arising from or relating to these Terms of Service or our services:</p>
<ul>
<li>The parties will first attempt to resolve the dispute through good-faith negotiation.</li>
<li>If negotiation fails, the dispute will be resolved through binding arbitration in New York, New York, in accordance with the rules of the American Arbitration Association.</li>
<li>Each party will bear its own costs and attorney fees in connection with any dispute resolution proceedings.</li>
</ul>

<h2>Changes to Terms</h2>
<p>We reserve the right to modify or update these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website and services following any changes constitutes your acceptance of the revised terms.</p>

<h2>Contact</h2>
<p>If you have any questions about these Terms of Service, please contact us at:</p>
<p>Email: hello@webfixedpro.com</p>

<p><em>Effective date: March 2026</em></p>',
            ]
        );
    }
}
