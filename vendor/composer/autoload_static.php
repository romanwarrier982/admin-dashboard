<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit96a7399d67cb1a3227851aceffaf30f6
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Andyabih\\LaravelToUML\\' => 22,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Andyabih\\LaravelToUML\\' => 
        array (
            0 => __DIR__ . '/..' . '/andyabih/laravel-to-uml/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit96a7399d67cb1a3227851aceffaf30f6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit96a7399d67cb1a3227851aceffaf30f6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit96a7399d67cb1a3227851aceffaf30f6::$classMap;

        }, null, ClassLoader::class);
    }
}
