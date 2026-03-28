<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeroSectionResource\Pages;
use App\Models\HeroSection;
use BackedEnum;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;
use UnitEnum;

class HeroSectionResource extends Resource
{
    protected static ?string $model = HeroSection::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-sparkles';

    protected static string | UnitEnum | null $navigationGroup = 'Content';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Hero Content')
                    ->schema([
                        TextInput::make('badge_text')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('heading_line1')
                            ->label('Heading Line 1')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('heading_line2')
                            ->label('Heading Line 2')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('subtitle')
                            ->required()
                            ->rows(3),
                    ]),
                Section::make('Call to Action')
                    ->schema([
                        TextInput::make('cta_primary_text')
                            ->label('Primary CTA Text')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('cta_secondary_text')
                            ->label('Secondary CTA Text')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('trust_text')
                            ->required()
                            ->maxLength(255),
                    ]),
                Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('badge_text')
                    ->searchable(),
                Tables\Columns\TextColumn::make('heading_line1')
                    ->label('Heading'),
                Tables\Columns\ToggleColumn::make('is_active')
                    ->label('Active'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->actions([
                \Filament\Actions\EditAction::make(),
            ])
            ->bulkActions([
                \Filament\Actions\BulkActionGroup::make([
                    \Filament\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHeroSections::route('/'),
            'create' => Pages\CreateHeroSection::route('/create'),
            'edit' => Pages\EditHeroSection::route('/{record}/edit'),
        ];
    }
}
