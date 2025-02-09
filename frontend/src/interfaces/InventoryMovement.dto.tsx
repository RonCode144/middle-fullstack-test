export interface InventoryMovement {
  readonly id: number;
  product_id: number;
  type: 'entry' | 'exit';
  quantity: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}