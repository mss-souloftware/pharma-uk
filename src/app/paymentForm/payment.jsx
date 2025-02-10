import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <Card className="max-w-md mx-auto p-6">
      <CardContent className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Payment Method:</p>
            <RadioGroup
              defaultValue="credit-card"
              className="space-y-3"
              onValueChange={setPaymentMethod}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="google-pay" id="google-pay" />
                <Label 
                  htmlFor="google-pay" 
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Image 
                    src="/api/placeholder/24/24"
                    alt="Google Pay"
                    className="w-6 h-6"
                  />
                  <span>Google Pay</span>
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label 
                  htmlFor="credit-card"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <CreditCard className="w-6 h-6" />
                  <span>Credit Card</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === 'credit-card' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="nameOnCard">Name On Card</Label>
                <Input
                  id="nameOnCard"
                  type="text"
                  placeholder="Enter name on card"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="Enter card number"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expirationDate">Expiration Date</Label>
                  <Input
                    id="expirationDate"
                    type="text"
                    placeholder="Expiration date"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="Enter CVV"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            className="w-full mt-6 bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Check Out
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payment;