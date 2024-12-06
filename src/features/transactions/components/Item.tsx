import { TransactionType } from '../types';

type TransactionItemProps = {
  data: TransactionType;
};

export function TransactionItem({ data }: TransactionItemProps) {
  return null;
}

export function TransactionItemSkeleton() {
  return (
    <div className="relative flex flex-row flex-wrap w-full items-center justify-between mb-3">
      <div className="absolute left-0 w-[50px] h-full flex items-center">
        <div className="skeleton flex flex-row items-center justify-center w-[40px] h-[40px] rounded-full">
          <div className="w-[24px] h-[24px]"></div>
        </div>
      </div>
      <div className="pl-[60px]">
        <span className="skeleton block h-4 w-20"></span>
        <h3 className="skeleton h-4 w-32 my-2"></h3>
      </div>
      <span className="skeleton h-4 w-16"></span>
    </div>
  );
}
