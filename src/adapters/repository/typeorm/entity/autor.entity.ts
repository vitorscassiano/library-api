import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { LivroEntity } from "./livro.entity copy";

@Entity()
export class AutorEntity {
  @PrimaryColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(type => LivroEntity, livro => livro.autor, { cascade: ['insert'], eager: true })
  livros: LivroEntity[];
}
