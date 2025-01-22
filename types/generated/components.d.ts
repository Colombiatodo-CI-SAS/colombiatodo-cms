import type { Schema, Attribute } from '@strapi/strapi';

export interface DetalleProductoEspecificaciones extends Schema.Component {
  collectionName: 'components_detalle_producto_especificaciones';
  info: {
    displayName: 'especificaciones';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface DimensionesDimensiones extends Schema.Component {
  collectionName: 'components_dimensiones_dimensiones';
  info: {
    displayName: 'dimensiones';
    icon: 'apps';
    description: '';
  };
  attributes: {
    alto: Attribute.Decimal & Attribute.Required;
    ancho: Attribute.Decimal & Attribute.Required;
    largo: Attribute.Decimal & Attribute.Required;
    peso: Attribute.Decimal & Attribute.Required;
  };
}

export interface VariantesColor extends Schema.Component {
  collectionName: 'components_variantes_colors';
  info: {
    displayName: 'color';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    stock_color: Attribute.Integer & Attribute.Required;
    imagen_referencia: Attribute.Media<'images', true>;
  };
}

export interface VariantesTalla extends Schema.Component {
  collectionName: 'components_variantes_tallas';
  info: {
    displayName: 'talla';
    description: '';
  };
  attributes: {
    talla: Attribute.String & Attribute.Required;
    stock_talla: Attribute.Integer & Attribute.Required;
    colores_disponibles: Attribute.Component<'variantes.color', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'detalle-producto.especificaciones': DetalleProductoEspecificaciones;
      'dimensiones.dimensiones': DimensionesDimensiones;
      'variantes.color': VariantesColor;
      'variantes.talla': VariantesTalla;
    }
  }
}
