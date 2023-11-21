export default function calculateTotalPrice(
  regularDaysPrice: number,
  weekendDaysPrice: number,
  startDate: string,
  endDate: string
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let totalCost = 0;

  for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    totalCost += isWeekend ? weekendDaysPrice : regularDaysPrice;
  }

  return totalCost;
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
