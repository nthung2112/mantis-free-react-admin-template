import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';

interface MenuState {
  isDashboardDrawerOpened: boolean;
}

const initialState: MenuState = {
  isDashboardDrawerOpened: false
};

const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard' // server URL
} as const;

export function useGetMenuMaster() {
  const { data, isLoading } = useSWR<MenuState>(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      menuMaster: data,
      menuMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean): void {
  // to update local state based on key
  mutate<MenuState>(
    endpoints.key + endpoints.master,
    (currentMenuMaster) => {
      return { ...currentMenuMaster!, isDashboardDrawerOpened };
    },
    false
  );
}
