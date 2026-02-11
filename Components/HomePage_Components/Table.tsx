import React from "react";

type Invoice = {
  id: string;
  status: "Paid" | "Pending" | "Unpaid";
  method: string;
  amount: number;
};

const data: Invoice[] = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: 250 },
  { id: "INV002", status: "Pending", method: "PayPal", amount: 150 },
];

const InvoiceTable: React.FC = () => {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="w-120 dark:text-[#E5E7EB] p-6 rounded-xl flex items-center justify-center">
      <table className="w-100 border-collapse dark:rounded-xl">
        
        <thead>
          <tr className="text-left text-lg border-b dark:border-[#1F2937] dark:text-[#E5E7EB]">
            <th className="py-3 font-medium">Invoice</th>
            <th className="py-3 font-medium">Status</th>
            <th className="py-3 font-medium">Method</th>
            <th className="py-3 font-medium text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b last:border-none dark:border-[#1F2937] dark:hover:bg-[#1F2937]/40 transition-colors"
            >
              <td className="py-4 dark:text-[#E5E7EB]">{item.id}</td>

              <td className="py-4 dark:text-[#9CA3AF]">
                {item.status}
              </td>

              <td className="py-4 dark:text-[#9CA3AF]">
                {item.method}
              </td>

              <td className="py-4 text-right dark:text-[#E5E7EB]">
                ${item.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="border-t dark:border-[#1F2937]">
            <td
              colSpan={3}
              className="py-4 text-lg font-medium dark:text-[#E5E7EB]"
            >
              Total
            </td>
            <td className="py-4 text-right text-lg font-semibold dark:text-[#3B82F6]">
              ${total.toLocaleString()}.00
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceTable;
