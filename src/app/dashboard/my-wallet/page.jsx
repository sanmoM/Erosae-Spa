"use client";

import { useState } from "react";
import { Gift, RefreshCw, Wallet, BadgePercent, HandCoins, Copy, Check } from "lucide-react";

const UserWallet = () => {
  const [copied, setCopied] = useState(false);

  const walletStats = [
    {
      id: 1,
      title: "Wallet Balance",
      value: "AED 820",
      subtitle: "Available to spend",
      icon: Wallet,
      bg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
    },
    {
      id: 2,
      title: "Refund Credits",
      value: "AED 240",
      subtitle: "Refunded from cancelled bookings",
      icon: RefreshCw,
      bg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      id: 3,
      title: "Promo Credits",
      value: "AED 120",
      subtitle: "Promo & coupon rewards",
      icon: BadgePercent,
      bg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
    },
    {
      id: 4,
      title: "Loyalty Value",
      value: "AED 60",
      subtitle: "Converted from loyalty points",
      icon: HandCoins,
      bg: "bg-pink-500/10",
      iconColor: "text-pink-400",
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "Refund",
      amount: "+ AED 150",
      status: "Added",
      date: "10 Jan 2026",
      note: "Booking cancelled",
    },
    {
      id: 2,
      type: "Promo Credit",
      amount: "+ AED 50",
      status: "Added",
      date: "08 Jan 2026",
      note: "WELCOME50 coupon",
    },
    {
      id: 3,
      type: "Wallet Payment",
      amount: "- AED 210",
      status: "Used",
      date: "03 Jan 2026",
      note: "Massage booking payment",
    },
  ];

  const referral = {
    code: "EROSAEXY91",
    totalEarned: "AED 340",
    activeReferrals: 6,
    perSuccess: "AED 50",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referral.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="md:mb-8 mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
          My Wallet
        </h2>
        <p className="mt-1 text-sm sm:text-base text-stone-400">
          Your digital wallet for refunds, credits and loyalty earnings.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {walletStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-800/50 p-4"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${stat.bg}`}>
                <Icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>

              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <h2 className="text-xl font-semibold text-white">{stat.value}</h2>
                <p className="text-[12px] text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* TRANSACTION HISTORY */}
          <div>
            <h3 className="text-lg font-medium">Transaction History</h3>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-[700px] w-full text-sm rounded-xl">
                <thead className="bg-gray-800 text-stone-300 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Note</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((row, i) => (
                    <tr
                      key={row.id}
                      className="bg-gray-800/40 border-b border-gray-700 hover:bg-gray-800 text-stone-300"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">{i + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            row.status === "Added"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                      <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* REFUND OPTIONS */}
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-medium mb-3">Refund Options</h3>

            <p className="text-sm text-stone-400 mb-4">
              When a refund is issued, choose how you want to receive it:
            </p>

            <ul className="space-y-2 text-sm text-stone-300">
              <li>✔ Return to wallet (instant)</li>
              <li>✔ Return to original payment method</li>
              <li>✔ Store as promo credits</li>
              <li className="text-yellow-400">⚠ Admin may override in special cases</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE – REFERRAL SECTION */}
        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" /> Referral Program
            </h3>

            <p className="text-sm text-stone-400 mb-3">
              Share your referral code and earn rewards on every successful signup.
            </p>

            {/* Referral Code Box */}
            <div className="flex items-center justify-between bg-gray-900 px-3 py-2 rounded-lg border border-gray-700">
              <span className="font-mono text-primary">{referral.code}</span>

              <button
                onClick={handleCopy}
                className="text-sm flex items-center gap-1 text-stone-300"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy
                  </>
                )}
              </button>
            </div>

            {/* Referral stats */}
            <div className="mt-5 space-y-2 text-sm text-stone-300">
              <p>Total Earned: <span className="text-primary">{referral.totalEarned}</span></p>
              <p>Active Referrals: {referral.activeReferrals}</p>
              <p>Per Success Reward: {referral.perSuccess}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
