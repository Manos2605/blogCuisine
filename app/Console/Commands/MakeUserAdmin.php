<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class MakeUserAdmin extends Command
{
    protected $signature = 'user:make-admin {email}';
    protected $description = 'Définit un utilisateur comme administrateur';

    public function handle()
    {
        $email = $this->argument('email');
        $user = User::where('email', $email)->first();

        if (!$user) {
            $this->error("L'utilisateur avec l'email {$email} n'existe pas.");
            return 1;
        }

        $user->role = 'admin';
        $user->save();

        $this->info("L'utilisateur {$email} est maintenant administrateur.");
        return 0;
    }
} 