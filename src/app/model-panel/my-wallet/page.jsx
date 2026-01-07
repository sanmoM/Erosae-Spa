"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { earnings } from "@/utilities/data";
import { Clock, Lock, TrendingUp, Wallet } from "lucide-react";
import React, { useState } from "react";

const MyWallet = () => {
  const walletStats = [
    {
      id: 1,
      title: "Total Earnings",
      value: "25,450 AED",
      subtitle: "",
      icon: Wallet,
      bg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },
    {
      id: 2,
      title: "Pending Balance",
      value: "3,200 AED",
      subtitle: "Pending approval",
      icon: TrendingUp,
      bg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      id: 3,
      title: "Withdrawable Balance",
      value: "22,250 AED",
      subtitle: "Ready to withdraw",
      icon: Lock,
      bg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
    },
    {
      id: 4,
      title: "Frozen Balance",
      value: "0 AED",
      subtitle: "Fraud check",
      icon: Clock,
      bg: "bg-pink-500/10",
      iconColor: "text-pink-500",
    },
  ];

  const [savedMethods, setSavedMethods] = useState([
    {
      id: 1,
      type: "Bank Transfer",
      details: "Emirates NBD - Acc: ****7890",
      country: "UAE",
      isDefault: true,
    },
    {
      id: 2,
      type: "Home Country Remittance",
      details: "India - HDFC Bank",
      country: "India",
      isDefault: false,
    },
  ]);

  return (
    <div>
      <div className="md:mb-8 mb-6">
        <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
          My Wallet
        </h2>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Manage your earnings and withdrawals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {walletStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className="flex items-center  gap-4 rounded-xl border border-gray-800 bg-gray-800/50 p-3 md:p-5"
            >
              {/* LEFT ICON (2/3 width visually) */}
              <div
                className={`flex items-center justify-center md:w-16 w-14 h-14 md:h-16 rounded-lg ${stat.bg}`}
              >
                <Icon className={`md:w-8 w-6 h-6 md:h-8 ${stat.iconColor}`} />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col ">
                <p className="text-sm text-gray-400">{stat.title}</p>
                <h2 className="md:text-xl text-xl my-1 font-semibold text-white">
                  {stat.value}
                </h2>
                <p className="text-[12px] text-gray-400">{stat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gray-800/50 rounded-lg shadow-sm border border-gray-700 border-spa-light-border p-6">
            <h3 className="text-lg font-semibold text-spa-dark mb-6">
              Request Withdrawal
            </h3>

            <form className="space-y-4">
              {/* Withdrawal Amount */}
              <div>
                <div className="grid w-full  items-center gap-2">
                  <Label htmlFor="amount">Withdrawal Amount (AED)</Label>
                  <Input type="number" id="amount" placeholder="Enter Amount" />
                </div>
                {/* {errors && (
                  <p className="text-spa-accent text-sm mt-2">{errors}</p>
                )} */}
              </div>

              {/* Withdrawal Method */}

              <div className="grid w-full  items-center gap-2">
                <Label>Withdrawal Method</Label>

                <Select>
                  <SelectTrigger className=" w-full text-xs py-5 md:text-sm border-stone-400">
                    <SelectValue
                      className={"text-stone-300"}
                      placeholder="Sort by"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bank-transfer">
                        Bank Transfer
                      </SelectItem>
                      <SelectItem value="cash-pickup">
                        Local Cash Pickup
                      </SelectItem>
                      <SelectItem value="remittance">
                        Home Country Remittance
                      </SelectItem>
                      <SelectItem value="physical-cash">
                        Physical Cash (Approval Only)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="secondary"
                className="w-full text-white py-2 rounded-lg font-medium "
              >
                Request Withdrawal
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-8  p-4 rounded-lg border border-gray-600 bg-primary/10 ">
              <p className="text-xs text-spa-muted">
                You have made <strong>2 of 4</strong> withdrawal requests this
                month.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg  md:text-xl lg:text-2xl font-medium">
              Earnings History
            </h2>
            <div className=" overflow-x-auto mt-4 w-full">
              <table className="min-w-[700px] w-full text-sm text-left text-gray-700  rounded-xl shadow">
                <thead className="bg-gray-800 text-stone-300 border-b border-gray-400">
                  <tr className="text-xs sm:text-sm lg:text-base">
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      #
                    </th>
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      Date
                    </th>
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      Service
                    </th>
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      Amount
                    </th>
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      commission
                    </th>
                    <th className="px-6 py-3 lg:py-4 whitespace-nowrap font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {earnings.map((row, indx) => (
                    <tr
                      key={row.id}
                      className="bg-gray-800/50 border-b border-b-gray-700 hover:bg-gray-800 text-stone-400 transition text-xs sm:text-sm lg:text-base"
                    >
                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        {indx + 1}
                      </td>
                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        {row.service}
                      </td>
                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        {row.amount}
                      </td>

                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        {row.commission}
                      </td>
                      <td className="px-6 py-4 lg:py-6 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          row.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-gray-800/50 border-gray-700 rounded-lg shadow-sm border border-spa-light-border p-6">
            <h3 className="lg:text-lg  font-medium text-spa-dark mb-4">
              Withdrawal Rules
            </h3>
            <ul className="lg:space-y-3 space-y-2 text-sm text-stone-400 text-spa-muted">
              <li className="flex items-start gap-3">
                <span className="text-spa-primary font-bold">•</span>
                <span>Minimum withdrawal: 2,000 AED</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spa-primary font-bold">•</span>
                <span>Maximum 4 requests per month</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spa-primary font-bold">•</span>
                <span>Admin approval required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spa-primary font-bold">•</span>
                <span>Account can be frozen anytime</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 mt-8 border-gray-700 rounded-lg shadow-sm border border-spa-light-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-spa-dark">
                Withdrawal Methods
              </h3>
            </div>

            {/* Saved Methods */}
            <div className="space-y-3 mb-6">
              {savedMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 rounded-lg border-2 ${
                    method.isDefault ? "border-primary/50" : "border-gray-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-spa-dark text-stone-300 text-sm">
                        {method.type}
                      </p>
                      <p className="text-xs text-spa-muted text-stone-400 mt-1">
                        {method.details}
                      </p>
                      <p className="text-xs text-spa-muted text-stone-400">
                        {method.country}
                      </p>
                    </div>
                    {method.isDefault && (
                      <span className="text-xs bg-spa-primary text-white px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
