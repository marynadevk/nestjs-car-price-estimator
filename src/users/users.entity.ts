import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('insert user with ID', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('update user with ID', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('remove user with ID', this.id);
  }
}
