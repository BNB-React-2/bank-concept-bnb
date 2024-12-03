import { Tabs } from '@/components/elements/Tabs';
import { inputStyles, selectStyles } from '@/components/forms/FormItem';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ExpensesTab } from './tabs/Expenses';
import { ReleasesTab } from './tabs/Releases';
import { TaxesTab } from './tabs/Taxes';

const tabsData = [
  {
    text: 'Lançamentos',
    value: 'releases',
  },
  {
    text: 'Despesas',
    value: 'expenses',
  },
  {
    text: 'Taxas',
    value: 'taxes',
  },
];

const selectData = [
  {
    name: 'Dia',
    value: 'day',
  },
  {
    name: 'Mês',
    value: 'month',
  },
  {
    name: 'Ano',
    value: 'year',
  },
];

export function HomeInfoSection() {
  const [activeTab, setActiveTab] = useState(tabsData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0].value);

  return (
    <>
      <input type="text" className={inputStyles} placeholder="Pode perguntar" />
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-10">
        <Tabs items={tabsData} setActive={setActiveTab} active={activeTab} />
        <select
          value={activeSelectData}
          onChange={(e) => setActiveSelectData(e.target.value)}
          className={cn([selectStyles, 'w-fit h-2'])}
        >
          {selectData.map((i) => (
            <option value={i.value} key={i.value}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        {activeTab === 'expenses' && <ExpensesTab />}
        {activeTab === 'releases' && <ReleasesTab />}
        {activeTab === 'taxes' && <TaxesTab />}
      </div>
    </>
  );
}
