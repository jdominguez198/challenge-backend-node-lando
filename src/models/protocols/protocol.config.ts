import { AssistAlliesProtocolModel } from './assist-allies-protocol.model';
import { AvoidCrossfireProtocol } from './avoid-crossfire-protocol.model';
import { AvoidMechProtocolModel } from './avoid-mech-protocol.model';
import { ClosestEnemiesProtocolModel } from './closest-enemies-protocol.model';
import { FurthestEnemiesProtocolModel } from './furthest-enemies-protocol.model';
import { PrioritizeMechProtocolModel } from './prioritize-mech-protocol.model';

export const protocolsMap = {
  'assist-allies': AssistAlliesProtocolModel,
  'avoid-crossfire': AvoidCrossfireProtocol,
  'avoid-mech': AvoidMechProtocolModel,
  'closest-enemies': ClosestEnemiesProtocolModel,
  'furthest-enemies': FurthestEnemiesProtocolModel,
  'prioritize-mech': PrioritizeMechProtocolModel,
};
