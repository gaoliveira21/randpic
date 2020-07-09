<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class AuthMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            $request->attributes->add(['loggedUserID' => $user->id]);
        } catch(Exception $e) {
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['error' => 'Token is invalid'], 401); // Unauthorized
            } else if($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['error' => 'Token is expired'], 401); // Unauthorized
            } else {
                return response()->json(['error' => 'Authorization Token not found'], 401); // Unauthorized
            }
        }

        return $next($request);
    }
}
