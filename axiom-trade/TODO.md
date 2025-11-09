# TODO: Build Pixel-Perfect Replica of Axiom Trade Token Discovery Table

- [ ] Update Token and Perpetual types to include marketCap, volume24h, transactions, holders
- [ ] Update /api/tokens and /api/perpetuals to return expanded data
- [ ] Refactor TokenTable.tsx: Change tabs to "New Pairs", "Final Stretch", "Migrated"; add columns Token, Market Cap, Liquidity, 24h Vol, Txns, Holders, Action; add sorting, hover effects, row click modal
- [ ] Create TokenPopover component (Radix Popover) for token details
- [ ] Create Tooltip component (Radix Tooltip) for icons/cells
- [ ] Create TokenModal component (Radix Dialog) for row details with tabs
- [ ] Add useWebSocketMock hook for real-time updates with animations
- [ ] Wrap table in ErrorBoundary
- [ ] Make responsive: Grid on desktop, stacked cards on mobile
- [ ] Update Redux tableSlice for sorting, filters, modals
- [ ] Add progressive loading for pagination if needed
- [ ] Test responsiveness, interactions, performance
- [ ] Add video demo, README snapshots
- [ ] Deploy to Vercel, ensure Lighthouse score ≥90
