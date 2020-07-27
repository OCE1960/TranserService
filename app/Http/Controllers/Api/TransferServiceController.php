<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Balance;
use App\Models\Transaction;
use Validator;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TransferServiceController extends Controller
{
    public function transaction(Request $request) 
    {

        //create the validator for the Service Time.
        $validator = $this->validateTransaction($request);

        //Redirect to the create Service Time page if validation fails.
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()], 422);
        } 

        $user_id = Auth::id();
        $from_account_balance = Balance::where('user_id', $user_id)->pluck('balance')->all();
        $from_account_nr = Balance::where('user_id', $user_id)->pluck('account_nr')->all();
        if($from_account_balance > $request->amount) {
            return response()->json(['errors'=>'You have Insufficient Fund'], 422);
        }

        $to_account_nr = Balance::where('account_nr', $request->account_nr)->pluck('account_nr')->all();
        $to_account_balance = Balance::where('account_nr', $request->account_nr)->pluck('balance')->all();
        if($to_account_nr == null){
            return response()->json(['errors'=>'Please The Account Number is Incoorect, Kindly Cross-check Account Number'], 422); 
        }

        $transaction = new Transaction;
        $transaction->reference = time().' - '.$from_account_nr;
        $transaction->account_nr = $request->account_nr;
        $transaction->amount = $request->amount;
        $transaction->save();

        
        $from_final_account_balance = $from_account_balance - $request->amount;
        $to_final_account_balance = $to_account_balance + $request->amount;

        $from_account = Balance::where('user_id', $user_id)->get();
        $from_account->balance = $from_final_account_balance;
        $from_account->save();


        $to_account = Balance::where('account_nr', $request->account_nr)->get();
        $to_account->balance = $to_final_account_balance;
        $to_account->save();

        return response()->json(['data'=> 'Transaction was Successful'], 201);

    }

    public function validateTransaction(Request $request) 
    {

        $validation_rules = array(
            'amount' => 'required|numeric',
            'account_nr' => 'required',
        );

        $validation_messages = array(
            'required' => 'The :attribute field is required.',
            'numeric' => 'The :attribute field be a Number.',
        );

        $attributes = [
            'amount'     => 'Amount',
            'account_nr'     => 'Account Number',
        ];

        //Create a validator for the data in the request
        return Validator::make($request->all(), $validation_rules, $validation_messages, $attributes);

    }
}
