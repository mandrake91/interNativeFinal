import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const NewsTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="newspaper" color={color} size={size} />
);

export const InformesTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="file-document-edit" color={color} size={size} />
);

export const PerfilTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="account" color={color} size={size} />
);

export const EmergenciaTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="police-badge-outline" size={24}/>
);

export const AdministradorTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="human-dolly" size={24}/>
);