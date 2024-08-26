import type { Schema, Attribute } from '@strapi/strapi';

export interface DimensionesDimensiones extends Schema.Component {
  collectionName: 'components_dimensiones_dimensiones';
  info: {
    displayName: 'dimensiones';
    icon: 'apps';
    description: '';
  };
  attributes: {
    alto: Attribute.Integer;
    ancho: Attribute.Integer;
    largo: Attribute.Integer;
    peso: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dimensiones.dimensiones': DimensionesDimensiones;
    }
  }
}
