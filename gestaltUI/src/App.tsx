import { useEffect } from "react";
import { loadFonts } from "./utils";
import {
  ArrowUp,
  BarChart3,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Copy,
  Cpu,
  FileInput,
  FileText,
  Globe,
  GripVertical,
  History,
  Linkedin,
  Mail,
  MessageSquare,
  PanelRightClose,
  Paperclip,
  Pencil,
  Phone,
  Plus,
  Radio,
  RefreshCw,
  Rocket,
  RotateCcw,
  Search,
  Settings,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const ALL_FONTS = {
  "Inter-Thin": 100,
  "Inter-ExtraLight": 200,
  "Inter-Light": 300,
  "Inter-Regular": 400,
  "Inter-Medium": 500,
  "Inter-SemiBold": 600,
  "Inter-Bold": 700,
  "Inter-ExtraBold": 800,
  "Inter-Black": 900,
};

export default function App() {
  useEffect(() => {
    loadFonts(ALL_FONTS);
  }, []);

  return (
    <div>
      <div
        className="w-full h-fit bg-white text-zinc-950 h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible"
        style={{ minHeight: "1080px" }}
        data-id="36efe5ed-93a3-585e-ba80-1b01b09b15c4"
      >
        <div
          className="flex flex-col h-screen"
          data-id="6253f81d-dde4-570a-bb48-fb10cf9f4e41"
        >
          <div
            className="flex items-center justify-between px-4 py-2 border-zinc-200 border-0 border-solid"
            data-id="2a767ede-cd7e-5178-84de-0418eb1daa85"
          >
            <div
              className="flex items-center gap-4"
              data-id="3b3ab2d3-1863-5e22-8742-4ca2df077e35"
            >
              <div
                className="flex items-center gap-2"
                data-id="477fd491-761b-5c4d-922a-311eaf2baca4"
              >
                <Zap
                  className="size-5 text-[#8e51ff]"
                  data-id="cfd8f634-59a5-581f-b21f-e62f9158ac04"
                />
                <span
                  className="font-semibold text-base"
                  data-id="27734167-30ce-5b83-b8bd-bbed5d71ff80"
                >
                  CampaignOS
                </span>
              </div>
              <Separator
                className="h-5"
                orientation="vertical"
                data-id="212fcb71-5cf2-54ca-8238-02556c54190e"
              />
              <div
                className="flex items-center gap-1"
                data-id="047125f8-4d28-5d4d-ae87-2317dede27f4"
              >
                <Button
                  className="gap-1 text-sm text-[#71717b]"
                  size="sm"
                  variant="ghost"
                  data-id="a244160e-a983-5627-84de-2290322ff5fa"
                >
                  <ChevronLeft
                    className="size-4"
                    data-id="69704d1c-d1a6-5046-8c1b-a5b5fda35ea3"
                  />
                  Campaigns
                </Button>
                <ChevronRight
                  className="size-3 text-[#71717b]"
                  data-id="9d6b8f2e-546e-5f6f-a23e-e8dfcea3964a"
                />
                <span
                  className="text-sm font-medium"
                  data-id="aed0ec58-0c05-5f18-999c-2d0b1abd0c35"
                >
                  Q1 Enterprise Pipeline
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-2"
              data-id="2c76cf97-1afb-5147-aadf-beff3e54566b"
            >
              <div
                className="flex items-center px-3 py-1.5 gap-2 w-80 rounded-lg bg-zinc-100"
                data-id="13f8bef2-6d21-5b48-ae33-900fe37539a0"
              >
                <Search
                  className="size-4 text-[#71717b]"
                  data-id="92b5a4e8-1f70-5ee1-a2ce-47322625a336"
                />
                <span
                  className="text-sm text-[#71717b]"
                  data-id="854d28d2-8097-519f-93e8-46a3975478a2"
                >
                  Search campaign elements...
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 ml-auto rounded-sm bg-white text-[#71717b] border-zinc-200 border-0 border-solid"
                  data-id="40a4a74e-0d7c-5c7b-a850-51b8616a1703"
                >
                  ⌘K
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-2"
              data-id="837c2ef8-7f63-563c-8f65-b8184bb1f92a"
            >
              <Button
                size="sm"
                variant="ghost"
                data-id="d90f342f-db70-52db-9681-4257f1cf02fa"
              >
                <History
                  className="size-4"
                  data-id="1b63d660-08ba-50cb-a5ac-4566c0cb63b3"
                />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                data-id="874d40d2-7e05-5966-b34f-7d1c28a0a675"
              >
                <Share2
                  className="size-4"
                  data-id="44a8214f-03af-5a55-8b91-32c12114c4d2"
                />
              </Button>
              <div
                className="flex -space-x-2 ml-2"
                data-id="25093d22-eb80-5f05-91a7-7f384527de09"
              >
                <Avatar
                  className="size-7 border-white border-0 border-solid"
                  data-id="7139bdc4-ae4a-5d05-9255-f9b215248946"
                >
                  <AvatarFallback
                    className="text-xs bg-[#8e51ff] text-violet-50"
                    data-id="616873d8-c528-52c6-9569-5522e062a7cc"
                  >
                    JD
                  </AvatarFallback>
                </Avatar>
                <Avatar
                  className="size-7 border-white border-0 border-solid"
                  data-id="2aec9248-a322-5c04-b5a7-0f3958ae8bb0"
                >
                  <AvatarFallback
                    className="text-xs bg-[#009689] text-white"
                    data-id="e6f73760-6c66-5c4a-85d8-d458201ee2af"
                  >
                    MK
                  </AvatarFallback>
                </Avatar>
                <Avatar
                  className="size-7 border-white border-0 border-solid"
                  data-id="60957d4f-1f6c-5836-9267-840adcdc2454"
                >
                  <AvatarFallback
                    className="text-xs bg-[#f54900] text-white"
                    data-id="7a7c7207-ab15-520d-b39a-0e495027c765"
                  >
                    AL
                  </AvatarFallback>
                </Avatar>
              </div>
              <Button
                className="hover:bg-primary/90 ml-2 gap-1 bg-[#8e51ff] text-violet-50"
                size="sm"
                data-id="d8fe8ea7-edcb-5d87-85b1-e5bf22a6fb64"
              >
                <Rocket
                  className="size-4"
                  data-id="e9d1ec36-7b77-5cd6-9b1b-ebb3e3c11b85"
                />
                Launch
              </Button>
            </div>
          </div>
          <div
            className="flex flex-1 overflow-hidden"
            data-id="cb97af8f-344d-541b-afd9-a0625fd7b60e"
          >
            <div
              className="w-60 flex flex-col bg-neutral-50 border-zinc-200 border-0 border-solid"
              data-id="b41f06f0-3f03-5f34-ac2d-e622694a3f59"
            >
              <div
                className="p-4 flex flex-col gap-1"
                data-id="b21715de-bd17-5998-9640-2c6908dffba2"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2 mb-2 text-[#71717b]"
                  data-id="845959bc-f376-5a6e-af00-40e70a9db4cb"
                >
                  Campaign Elements
                </span>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 cursor-pointer rounded-lg bg-[#8e51ff]/10 text-[#8e51ff]"
                  data-id="0eea5388-f351-5f5e-a125-5396df522d52"
                >
                  <FileText
                    className="size-4"
                    data-id="8291ddf6-19ca-502c-af72-f017fceb5e23"
                  />
                  <span
                    className="text-sm font-medium"
                    data-id="f26426fb-c995-5c9a-9fdf-4506b82a1a5c"
                  >
                    Overview
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="4af212d3-758e-5398-bd37-43e3cae91646"
                >
                  <Users
                    className="size-4"
                    data-id="a19b3e94-61af-50fb-a355-494e50983542"
                  />
                  <span
                    className="text-sm"
                    data-id="68c6d550-a5e1-5054-b2ea-f4c0d76a61bc"
                  >
                    Audience
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="6ef9af95-a263-53df-9bdc-aeaff422a6f4"
                >
                  <Radio
                    className="size-4"
                    data-id="c3561c06-dd9d-5b43-98e3-09641719abf3"
                  />
                  <span
                    className="text-sm"
                    data-id="000671eb-6cee-5d7f-9aef-2348d7539086"
                  >
                    Signals
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="83201b50-e6b8-58a2-abd3-9b4a80a3e273"
                >
                  <MessageSquare
                    className="size-4"
                    data-id="e272aaa2-7dff-5aea-ae9b-73d272fdeea7"
                  />
                  <span
                    className="text-sm"
                    data-id="06ee50d4-6932-5719-b8ac-955f178a75b5"
                  >
                    Messaging
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="4796f536-b975-5fe9-8294-4786a7681670"
                >
                  <CalendarDays
                    className="size-4"
                    data-id="a4bafa88-1a73-5425-8a26-b0ca28424735"
                  />
                  <span
                    className="text-sm"
                    data-id="304a5be0-1236-5d7d-b93c-dd73b9c348ee"
                  >
                    Launch Plan
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="7b1dc36d-d0a3-56e9-9b80-578bd29ead1d"
                >
                  <BarChart3
                    className="size-4"
                    data-id="bba89f12-b4cf-5e81-be3f-2b16d252262d"
                  />
                  <span
                    className="text-sm"
                    data-id="dca9f36c-3873-5e5e-b64e-49af7c71ab68"
                  >
                    Analytics
                  </span>
                </div>
              </div>
              <Separator data-id="2467d805-33e8-5478-9dbb-ce1c11da937e" />
              <div
                className="p-4 flex flex-col gap-1"
                data-id="d2328893-1f71-5eab-9044-4c63739e1cc8"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2 mb-2 text-[#71717b]"
                  data-id="8d566bc3-6c46-5621-86e1-452f78b93e20"
                >
                  Assets
                </span>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="1a4d1108-37ad-5bcb-a1d7-a2c5c3e47f69"
                >
                  <Mail
                    className="size-4"
                    data-id="e54e7687-17f5-57f4-90df-1ef06c1c0b2d"
                  />
                  <span
                    className="text-sm"
                    data-id="23c09510-e01a-5888-ab02-741106b4af6f"
                  >
                    Email Templates
                  </span>
                  <Badge
                    className="ml-auto text-xs"
                    variant="secondary"
                    data-id="f2207149-5cea-5e54-b6a9-29137e9eec4a"
                  >
                    4
                  </Badge>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="65e5f795-75ff-5a7f-8d62-6e5eebd95926"
                >
                  <Linkedin
                    className="size-4"
                    data-id="b1686773-acbd-5479-9768-1231617fbb04"
                  />
                  <span
                    className="text-sm"
                    data-id="b1492376-93ce-5cb1-8348-98f322430d98"
                  >
                    LinkedIn Msgs
                  </span>
                  <Badge
                    className="ml-auto text-xs"
                    variant="secondary"
                    data-id="eb1e37ce-392a-5ff1-b164-f65e3a6643e3"
                  >
                    3
                  </Badge>
                </div>
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-zinc-950"
                  data-id="7e211d0d-5b26-5b4e-85e6-d9b7e4c4c6f9"
                >
                  <Phone
                    className="size-4"
                    data-id="78a83833-87ee-56b5-a60a-aaac1e6f8382"
                  />
                  <span
                    className="text-sm"
                    data-id="e248e1b6-1a94-517d-af84-3b8dfb2540d6"
                  >
                    Call Scripts
                  </span>
                  <Badge
                    className="ml-auto text-xs"
                    variant="secondary"
                    data-id="59b1c191-fc38-5a2d-9d53-4cb87f934e87"
                  >
                    2
                  </Badge>
                </div>
              </div>
              <div
                className="mt-auto p-4 border-zinc-200 border-0 border-solid"
                data-id="838ef5eb-ba5a-5fdb-b063-6252fb212e54"
              >
                <div
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent cursor-pointer rounded-lg text-[#71717b]"
                  data-id="fe034a90-5d90-5aa7-bd4a-7c3a51fb34f1"
                >
                  <Settings
                    className="size-4"
                    data-id="65d0ea31-e922-5f29-8894-e2350f102819"
                  />
                  <span
                    className="text-sm"
                    data-id="47c9cf80-d13f-58ca-961b-95263de00f0a"
                  >
                    Campaign Settings
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex-1 overflow-y-auto"
              data-id="621ba31b-7c5d-5ede-992e-07720b452156"
            >
              <div
                className="max-w-4xl mx-auto px-12 py-8"
                data-id="a353a76a-401a-5c14-acdb-16814d6849a0"
              >
                <div
                  className="flex items-center gap-2 mb-1"
                  data-id="c1d7d7fb-30d2-528c-a64b-e7334c5d2f16"
                >
                  <Badge
                    className="text-xs gap-1"
                    variant="secondary"
                    data-id="d41dd142-4b2b-5470-aa8f-02b5ea8cd0a2"
                  >
                    <Circle
                      className="size-2 fill-chart4 text-[#ffb900]"
                      data-id="ed73c6dd-203a-5740-99d0-9d9c6210dc9d"
                    />
                    Draft
                  </Badge>
                  <span
                    className="text-xs text-[#71717b]"
                    data-id="b8c7fd02-24fc-58e5-820a-6e39a8c12547"
                  >
                    Last edited 2 min ago by Jordan
                  </span>
                </div>
                <h1
                  className="text-4xl font-bold tracking-tight mb-1 outline-none"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  data-id="4cc275d0-97bd-5909-a802-af56aec5939f"
                >
                  Q1 Enterprise Pipeline Acceleration
                </h1>
                <p
                  className="text-lg mb-8 outline-none text-[#71717b]"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  data-id="56a6b91b-ada1-57ef-8d9a-2c1b21257547"
                >
                  Multi-touch outbound campaign targeting enterprise accounts
                  showing expansion signals
                </p>
                <Separator
                  className="mb-8"
                  data-id="2d8c25d4-b4d5-58d1-a27a-9b0a689b7baf"
                />
                <div
                  className="mb-8"
                  data-id="0422b627-6d44-5c53-bba5-262940300ff3"
                >
                  <div
                    className="flex items-center gap-2 mb-4"
                    data-id="6699add7-4754-572a-aaf8-cb232d6a05a8"
                  >
                    <Users
                      className="size-5 text-[#8e51ff]"
                      data-id="c4319508-515a-59f2-93ec-d5d974fda99d"
                    />
                    <h2
                      className="text-xl font-semibold"
                      data-id="4f1d1604-5148-519d-aa01-b41f7b6ace7c"
                    >
                      Audience Definition
                    </h2>
                    <Button
                      className="ml-auto gap-1 text-[#71717b]"
                      size="sm"
                      variant="ghost"
                      data-id="f8010244-bcb6-5674-a119-1826901fc279"
                    >
                      <Pencil
                        className="size-3"
                        data-id="a085ff9f-7928-5dfd-a61a-d587737bab85"
                      />
                      Edit
                    </Button>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-4"
                    data-id="18cc5b92-daeb-571b-8d9b-0b4e7b7a3557"
                  >
                    <div
                      className="p-4 gap-2 flex flex-col rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="372d25d6-cfb2-565c-bd49-1a1e5c3de8af"
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                        data-id="152a34ec-ec89-5930-89d1-47efec440006"
                      >
                        Target Persona
                      </span>
                      <p
                        className="text-sm outline-none"
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        data-id="acde6037-ee50-5bb2-9896-fa5e51266341"
                      >
                        VP of Sales &amp; CROs at B2B SaaS companies with
                        200-2000 employees, Series C+ or public, using
                        Salesforce as primary CRM
                      </p>
                    </div>
                    <div
                      className="p-4 gap-2 flex flex-col rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="111212c9-195e-5846-975d-f021db6b1c2f"
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                        data-id="211c3bc3-a5ea-5f83-a65a-4b6afb457135"
                      >
                        ICP Criteria
                      </span>
                      <div
                        className="flex flex-wrap gap-2 mt-1"
                        data-id="a1f980d4-0cad-5a89-a617-f439472c5d5f"
                      >
                        <Badge
                          variant="secondary"
                          data-id="367240e8-e850-59ea-8f94-b747e3b69cbd"
                        >
                          ARR $10M-$500M
                        </Badge>
                        <Badge
                          variant="secondary"
                          data-id="65ce2109-910d-526b-88c7-0c3f4e266be3"
                        >
                          B2B SaaS
                        </Badge>
                        <Badge
                          variant="secondary"
                          data-id="cac3cf61-e888-5ba1-b3ac-78d63cb5d1e1"
                        >
                          200-2000 employees
                        </Badge>
                        <Badge
                          variant="secondary"
                          data-id="bba462f3-cb8b-5ebf-98a8-6e05e93fe0df"
                        >
                          North America
                        </Badge>
                        <Badge
                          variant="secondary"
                          data-id="858c4ddb-16f9-5c68-b465-5a84beee840c"
                        >
                          Salesforce CRM
                        </Badge>
                        <Badge
                          variant="secondary"
                          data-id="334570fc-43a1-5a6f-ac28-ae7e2e2c3601"
                        >
                          Series C+
                        </Badge>
                      </div>
                    </div>
                    <div
                      className="p-4 gap-2 flex flex-col rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="cdfb43a8-38d9-52e3-90b4-8c05862d6c0d"
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                        data-id="d49a413f-4f55-52a5-b70e-fa1dc989caa0"
                      >
                        Exclusions
                      </span>
                      <p
                        className="text-sm outline-none"
                        contentEditable="true"
                        suppressContentEditableWarning={true}
                        data-id="860e51c7-b1fa-5b7e-8fc5-e838bcf297b5"
                      >
                        Current customers, companies in active deal cycle,
                        accounts contacted in last 90 days, competitors
                      </p>
                    </div>
                    <div
                      className="p-4 gap-2 flex flex-col rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="d695a35b-0e70-515b-9d7c-0a589c329f75"
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                        data-id="26c62799-6a7d-50a4-8d2f-031979beff0f"
                      >
                        Estimated Reach
                      </span>
                      <div
                        className="flex items-baseline gap-2"
                        data-id="2785f826-9f4d-5e5c-9eeb-40231fb604da"
                      >
                        <span
                          className="text-3xl font-bold text-[#8e51ff]"
                          data-id="dcde23ab-73e0-5214-8992-b5ebe9c15047"
                        >
                          2,847
                        </span>
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="90972f2f-2b69-51ba-b990-59529df522d4"
                        >
                          qualified accounts
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1 mt-1"
                        data-id="1d88c2b6-dfe6-5b62-8ca3-c694e9bde89a"
                      >
                        <TrendingUp
                          className="size-3 text-[#009689]"
                          data-id="958a6e79-b8ea-5eb6-a82b-21e63c25f29d"
                        />
                        <span
                          className="text-xs text-[#009689]"
                          data-id="f2f23901-eddc-53b7-92e1-be2d1036482e"
                        >
                          +12% from last quarter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-8"
                  data-id="74b38087-9175-534c-82b0-92e1b65b0cac"
                >
                  <div
                    className="flex items-center gap-2 mb-4"
                    data-id="f9d859c5-168a-53d2-80d1-7d195e88e459"
                  >
                    <Radio
                      className="size-5 text-[#8e51ff]"
                      data-id="ec8c11a5-ef08-5577-9ade-02cc46d059a7"
                    />
                    <h2
                      className="text-xl font-semibold"
                      data-id="22573536-2e8b-52c5-9c29-8508dc4b90c2"
                    >
                      Intent Signals
                    </h2>
                    <Button
                      className="ml-auto gap-1 text-[#71717b]"
                      size="sm"
                      variant="ghost"
                      data-id="0bb1e02c-6ae3-562b-8b91-b41e8829df15"
                    >
                      <Plus
                        className="size-3"
                        data-id="55601432-3fad-5f63-a488-b23bacd04df4"
                      />
                      Add Signal
                    </Button>
                  </div>
                  <div
                    className="space-y-2"
                    data-id="3cccec41-5350-5d09-add3-adb8a2f044a3"
                  >
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="9864f1c0-4759-5f41-8f4a-ebe887bc1c57"
                    >
                      <div
                        className="flex items-center justify-center size-10 rounded-lg bg-[#8e51ff]/10"
                        data-id="ce937ab9-da8c-50c6-a7e8-b860e08e39d5"
                      >
                        <Building2
                          className="size-5 text-[#8e51ff]"
                          data-id="8bdc05b9-cac1-5c02-b46a-c82428a9291c"
                        />
                      </div>
                      <div
                        className="flex-1"
                        data-id="99d0bf27-d518-5e3f-a5ba-6052ff25b275"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-id="dfb12270-8f6f-5ca7-897e-bb2d843819bf"
                        >
                          <span
                            className="text-sm font-medium"
                            data-id="36d7558f-388e-5772-bf9c-d01604c56ae3"
                          >
                            Hiring Sales Leadership
                          </span>
                          <Badge
                            className="text-xs bg-[#f54900]/15 text-[#f54900] border-black/1 border-0 border-solid"
                            data-id="b748b1d8-06e5-502e-baf7-95b8418e266c"
                          >
                            High Intent
                          </Badge>
                        </div>
                        <p
                          className="text-sm text-[#71717b]"
                          data-id="8eaac64f-736e-55e9-9849-cdbdb1251876"
                        >
                          Companies posting VP Sales, CRO, or Sales Director
                          roles in the last 30 days
                        </p>
                      </div>
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="5c3ace07-0070-5e32-816c-5712bc09c203"
                      >
                        847 matches
                      </span>
                      <GripVertical
                        className="size-4 text-[#71717b]"
                        data-id="013a2ec5-ee6c-56bd-a6fa-835b7bf70a40"
                      />
                    </div>
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="ac5ad1d5-31bf-53bd-b308-3639065ee5f3"
                    >
                      <div
                        className="flex items-center justify-center size-10 rounded-lg bg-[#8e51ff]/10"
                        data-id="deb10a0f-aeb9-5613-ba0d-13b8cac65782"
                      >
                        <TrendingUp
                          className="size-5 text-[#8e51ff]"
                          data-id="c54da7a2-7459-512c-98c3-29f1b6a5267b"
                        />
                      </div>
                      <div
                        className="flex-1"
                        data-id="e00a6b69-2607-5f9a-884a-f57fc9b0b758"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-id="009c8975-09dc-507d-a2f0-ec5b66ff7987"
                        >
                          <span
                            className="text-sm font-medium"
                            data-id="e472248e-d8f6-51f6-ae4f-908a460869f8"
                          >
                            Funding Round Announced
                          </span>
                          <Badge
                            className="text-xs bg-[#f54900]/15 text-[#f54900] border-black/1 border-0 border-solid"
                            data-id="64c95e97-3bd7-57af-b107-462c97562367"
                          >
                            High Intent
                          </Badge>
                        </div>
                        <p
                          className="text-sm text-[#71717b]"
                          data-id="c5889b84-7166-5576-b3be-89d9d83c2d5d"
                        >
                          Series C or later funding within the last 60 days
                        </p>
                      </div>
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="9483fb9b-ecd5-5260-97ab-39881d6ba83b"
                      >
                        312 matches
                      </span>
                      <GripVertical
                        className="size-4 text-[#71717b]"
                        data-id="900dd329-d707-5ed0-9963-ad4f3d3578c2"
                      />
                    </div>
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="4de3d6bf-ed27-52c9-a59c-8a36aad00d4a"
                    >
                      <div
                        className="flex items-center justify-center size-10 rounded-lg bg-[#ffb900]/10"
                        data-id="0b87a0b5-cae9-59e6-9a4d-28f583e144e1"
                      >
                        <Globe
                          className="size-5 text-[#ffb900]"
                          data-id="9490c487-13b6-5a9a-8c96-b16b9d7ac23d"
                        />
                      </div>
                      <div
                        className="flex-1"
                        data-id="24ff0c81-467b-5eaa-ad4d-168baf4bcad7"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-id="7dcbdad6-54d1-5e0f-84a1-2b1d98dfbf94"
                        >
                          <span
                            className="text-sm font-medium"
                            data-id="faecdad6-0360-5b78-9334-7eca4649ec2c"
                          >
                            Tech Stack Change
                          </span>
                          <Badge
                            className="text-xs bg-[#ffb900]/15 text-[#ffb900] border-black/1 border-0 border-solid"
                            data-id="526b1e51-812a-5413-bf37-2a439890e82e"
                          >
                            Medium Intent
                          </Badge>
                        </div>
                        <p
                          className="text-sm text-[#71717b]"
                          data-id="b89694f2-ce40-5acd-8892-7f5b7dc1b2b1"
                        >
                          Recently adopted or evaluating sales engagement
                          platforms
                        </p>
                      </div>
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="0eb25fc0-6520-558b-9284-958fb28471a1"
                      >
                        523 matches
                      </span>
                      <GripVertical
                        className="size-4 text-[#71717b]"
                        data-id="d2327c55-e02d-50cc-9b53-01e0867a4bdb"
                      />
                    </div>
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                      data-id="8b27bd29-5001-55b6-a4b8-2af10f7639ff"
                    >
                      <div
                        className="flex items-center justify-center size-10 rounded-lg bg-[#ffb900]/10"
                        data-id="4ac6332c-6aa8-5c9c-b7f6-97d1d5eba89f"
                      >
                        <Search
                          className="size-5 text-[#ffb900]"
                          data-id="fda6dc74-67aa-525a-9fe6-918eec287be1"
                        />
                      </div>
                      <div
                        className="flex-1"
                        data-id="ef1267d4-f888-5e92-8413-3c558e0ab179"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-id="46535bbb-4d3a-504c-af41-3f541538950f"
                        >
                          <span
                            className="text-sm font-medium"
                            data-id="4d32900e-8b38-59db-87b1-1fa1f928b484"
                          >
                            G2 Category Research
                          </span>
                          <Badge
                            className="text-xs bg-[#ffb900]/15 text-[#ffb900] border-black/1 border-0 border-solid"
                            data-id="6721632c-ac6a-568e-89e9-f81dcfc9859b"
                          >
                            Medium Intent
                          </Badge>
                        </div>
                        <p
                          className="text-sm text-[#71717b]"
                          data-id="2cf85a74-04ef-5230-bcd3-9104c88d9d13"
                        >
                          Actively researching sales intelligence or outbound
                          tools on G2
                        </p>
                      </div>
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="6a6b878a-c042-5527-bf7d-cf062068b626"
                      >
                        1,165 matches
                      </span>
                      <GripVertical
                        className="size-4 text-[#71717b]"
                        data-id="72630fe2-6756-5b76-9a5a-efa4cc58f693"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="mb-8"
                  data-id="463f2fd8-da79-55ce-9fec-a006a627529e"
                >
                  <div
                    className="flex items-center gap-2 mb-4"
                    data-id="e6d4e02b-cec9-540a-8ddd-353568280e46"
                  >
                    <MessageSquare
                      className="size-5 text-[#8e51ff]"
                      data-id="92e1d360-87a2-5b7e-a9b8-06638193e212"
                    />
                    <h2
                      className="text-xl font-semibold"
                      data-id="69f03a68-e7e7-5a8f-bc91-99f136e4405c"
                    >
                      Messaging Sequence
                    </h2>
                    <Button
                      className="ml-auto gap-1 text-[#71717b]"
                      size="sm"
                      variant="ghost"
                      data-id="67adcc6a-f9ae-5653-ab69-de6f3906ea9b"
                    >
                      <Plus
                        className="size-3"
                        data-id="5f54f2ef-8543-593c-ba27-a7df73d11646"
                      />
                      Add Step
                    </Button>
                  </div>
                  <div
                    className="relative"
                    data-id="7f12676b-569c-56c3-a07a-a2b6deefe218"
                  >
                    <div
                      className="absolute left-5 top-10 bottom-10 w-px bg-zinc-200"
                      data-id="96ea7ba5-8965-5305-bfd0-3f2994062006"
                    />
                    <div
                      className="space-y-4"
                      data-id="dbce2ab9-0cb2-5b8d-8158-f6114d11d3f4"
                    >
                      <div
                        className="flex gap-4 relative"
                        data-id="7faadeaf-1c4d-54f6-8580-9905e036558d"
                      >
                        <div
                          className="flex items-center justify-center size-10 text-sm font-semibold shrink-0 z-10 rounded-full bg-[#8e51ff] text-violet-50"
                          data-id="735bc1b2-3f85-5a15-ac29-415727fd92e4"
                        >
                          1
                        </div>
                        <div
                          className="flex-1 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                          data-id="b6c3292c-036d-5e4d-b3a1-bf76ab062887"
                        >
                          <div
                            className="flex items-center gap-2 mb-2"
                            data-id="c80c0d8a-d86e-5348-8e8e-ad208bdaae60"
                          >
                            <Mail
                              className="size-4 text-[#71717b]"
                              data-id="9cbbefe6-9a9d-5b24-8e8f-f7ee3cb21a43"
                            />
                            <span
                              className="text-sm font-medium"
                              data-id="650c34a2-d723-5b7d-b9bc-259a71d88f0a"
                            >
                              Email — Personalized Intro
                            </span>
                            <span
                              className="text-xs ml-auto text-[#71717b]"
                              data-id="fdc7bd76-14ab-59c7-9a67-5f692cac7cde"
                            >
                              Day 1
                            </span>
                          </div>
                          <p
                            className="text-sm outline-none text-[#71717b]"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            data-id="0b582150-2ae9-55c4-be53-3ea3e917052a"
                          >
                            Reference their specific signal (hiring/funding) and
                            connect to how we help similar companies scale
                            outbound. Keep under 100 words. End with a soft CTA.
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex gap-4 relative"
                        data-id="ade39c0c-a0b9-5de1-b134-63f7f02d0437"
                      >
                        <div
                          className="flex items-center justify-center size-10 text-sm font-semibold shrink-0 z-10 rounded-full bg-zinc-100 text-zinc-900 border-zinc-200 border-0 border-solid"
                          data-id="d9a94dbf-86e9-54d5-8596-12af8f32c434"
                        >
                          2
                        </div>
                        <div
                          className="flex-1 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                          data-id="68e8004b-0df7-5f92-ae1c-2ad8b4a33494"
                        >
                          <div
                            className="flex items-center gap-2 mb-2"
                            data-id="7717e61d-714b-51e6-a28c-85aaee995ffa"
                          >
                            <Linkedin
                              className="size-4 text-[#71717b]"
                              data-id="a8cfa007-3beb-50e3-9a02-e2e2e4c4bd16"
                            />
                            <span
                              className="text-sm font-medium"
                              data-id="e3588fba-5fd1-537e-970a-dbecaf548353"
                            >
                              LinkedIn — Connection Request
                            </span>
                            <span
                              className="text-xs ml-auto text-[#71717b]"
                              data-id="5986d257-e36b-5e56-9d1a-bbaeeb424733"
                            >
                              Day 3
                            </span>
                          </div>
                          <p
                            className="text-sm outline-none text-[#71717b]"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            data-id="cb711d52-e227-5a59-a5bd-f7465d293998"
                          >
                            Short personalized note referencing a recent post or
                            company news. No pitch — just establish connection.
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex gap-4 relative"
                        data-id="7fe77e72-75b8-56b2-8dba-2f9102f12f10"
                      >
                        <div
                          className="flex items-center justify-center size-10 text-sm font-semibold shrink-0 z-10 rounded-full bg-zinc-100 text-zinc-900 border-zinc-200 border-0 border-solid"
                          data-id="7d6adf65-0b4a-58e7-8eb5-8484c32c90f5"
                        >
                          3
                        </div>
                        <div
                          className="flex-1 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                          data-id="2dbd4ebe-7cdd-5050-8d36-1c61a97510e7"
                        >
                          <div
                            className="flex items-center gap-2 mb-2"
                            data-id="36122e9e-119b-52f1-9641-1a9a52615c47"
                          >
                            <Mail
                              className="size-4 text-[#71717b]"
                              data-id="00e3b9cb-132b-533e-811b-ab4bd695a317"
                            />
                            <span
                              className="text-sm font-medium"
                              data-id="ebb57d7d-bb07-5a46-bd9f-9f6b9209bf5b"
                            >
                              Email — Value Add
                            </span>
                            <span
                              className="text-xs ml-auto text-[#71717b]"
                              data-id="dc246707-d513-5782-8ebb-942b3c2a7508"
                            >
                              Day 5
                            </span>
                          </div>
                          <p
                            className="text-sm outline-none text-[#71717b]"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            data-id="cc244a22-8736-5b4c-bc1b-45586fa93dac"
                          >
                            Share a relevant case study or benchmark report.
                            Frame around their industry vertical. Include one
                            specific metric.
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex gap-4 relative"
                        data-id="1518f47a-ca7c-5d46-a80b-3c41fd937e48"
                      >
                        <div
                          className="flex items-center justify-center size-10 text-sm font-semibold shrink-0 z-10 rounded-full bg-zinc-100 text-zinc-900 border-zinc-200 border-0 border-solid"
                          data-id="94948b82-357b-5f79-aae6-bc249ee654c3"
                        >
                          4
                        </div>
                        <div
                          className="flex-1 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                          data-id="f7a83f4e-6e0d-55f0-bf1e-98c23abd427f"
                        >
                          <div
                            className="flex items-center gap-2 mb-2"
                            data-id="1bd7df63-948d-5839-a4c4-13baef9ddd2d"
                          >
                            <Phone
                              className="size-4 text-[#71717b]"
                              data-id="b1ec22d6-4429-5774-bc70-054da5798412"
                            />
                            <span
                              className="text-sm font-medium"
                              data-id="05e6a899-cf1f-5fa0-bc5b-c21e7ff15e0f"
                            >
                              Call — Discovery
                            </span>
                            <span
                              className="text-xs ml-auto text-[#71717b]"
                              data-id="92c10b2b-f058-59f5-96a1-da9741b8a9de"
                            >
                              Day 8
                            </span>
                          </div>
                          <p
                            className="text-sm outline-none text-[#71717b]"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            data-id="edcc95c0-106b-581f-a551-6b5ce616cf94"
                          >
                            Reference previous touchpoints. Lead with insight
                            about their market. Ask about current outbound
                            process and challenges.
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex gap-4 relative"
                        data-id="bbc02ba6-2d4f-5542-8b5f-9b9875bed8f7"
                      >
                        <div
                          className="flex items-center justify-center size-10 text-sm font-semibold shrink-0 z-10 rounded-full bg-zinc-100 text-zinc-900 border-zinc-200 border-0 border-solid"
                          data-id="fbc1322f-b29c-5b07-b223-3591b18d134e"
                        >
                          5
                        </div>
                        <div
                          className="flex-1 p-4 rounded-lg border-zinc-200 border-0 border-solid"
                          data-id="a2782f98-9faa-5c18-a53e-ca6677613eac"
                        >
                          <div
                            className="flex items-center gap-2 mb-2"
                            data-id="edf51a94-ed76-5d06-970a-d12588d9b0fa"
                          >
                            <Mail
                              className="size-4 text-[#71717b]"
                              data-id="1a1bd221-eee0-5bd2-ab8d-38b2947dda49"
                            />
                            <span
                              className="text-sm font-medium"
                              data-id="f5e0ddb7-474b-5d2f-97ff-2d6f11478d1b"
                            >
                              Email — Breakup
                            </span>
                            <span
                              className="text-xs ml-auto text-[#71717b]"
                              data-id="cbe2301a-32be-58bb-bdc4-10d93c6ac1b4"
                            >
                              Day 14
                            </span>
                          </div>
                          <p
                            className="text-sm outline-none text-[#71717b]"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            data-id="f1a64b1a-e0a2-52ae-ad93-c2a3613036d1"
                          >
                            Friendly close-the-loop email. Offer to reconnect
                            next quarter. Leave door open with a useful resource
                            link.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-8"
                  data-id="373faafb-88fa-58d2-9d3e-c4da65976b15"
                >
                  <div
                    className="flex items-center gap-2 mb-4"
                    data-id="b263797d-4a1f-54a3-ad6b-fe0e58e7e236"
                  >
                    <CalendarDays
                      className="size-5 text-[#8e51ff]"
                      data-id="bb6a9cc1-0a2c-54cf-9760-3b1f3ac7b697"
                    />
                    <h2
                      className="text-xl font-semibold"
                      data-id="9b233059-e6d7-5e14-899c-7cf82f09d076"
                    >
                      Launch Plan
                    </h2>
                  </div>
                  <div
                    className="overflow-hidden rounded-lg border-zinc-200 border-0 border-solid"
                    data-id="652c054f-8b43-5bfc-a9b0-ffcc364cb509"
                  >
                    <div
                      className="grid grid-cols-4 gap-0"
                      data-id="a9937f41-d482-58a5-825d-9fb298db32a3"
                    >
                      <div
                        className="p-4 bg-zinc-100/50 border-zinc-200 border-0 border-solid"
                        data-id="d9d2c3d5-2d18-525c-b24d-e4e364e12003"
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                          data-id="0b008e6a-b7dc-590e-8cab-fc8242b91885"
                        >
                          Phase
                        </span>
                      </div>
                      <div
                        className="p-4 bg-zinc-100/50 border-zinc-200 border-0 border-solid"
                        data-id="954bdde3-a7eb-54c4-a6dc-e2fd4b32129a"
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                          data-id="0b6f9878-cba0-50e3-b7f4-fcfcf6a45e73"
                        >
                          Timeline
                        </span>
                      </div>
                      <div
                        className="p-4 bg-zinc-100/50 border-zinc-200 border-0 border-solid"
                        data-id="885585ab-500b-5018-8e59-4dfdb7847034"
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                          data-id="d9ea5fe3-ecaf-513a-a21a-31da6f3e7b8d"
                        >
                          Actions
                        </span>
                      </div>
                      <div
                        className="p-4 bg-zinc-100/50 border-zinc-200 border-0 border-solid"
                        data-id="32b14373-ea01-555e-8840-f7d75b0c29a2"
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider text-[#71717b]"
                          data-id="cbb1b592-79ab-555d-87bb-ce7c336c440d"
                        >
                          Status
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="66394d80-1a07-5d6b-8231-0020875451e4"
                      >
                        <span
                          className="text-sm font-medium"
                          data-id="2181aa0c-7195-5ebc-8ada-2dd658a2cd91"
                        >
                          Seed List Build
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="788c4e9a-61b1-5250-b57e-59bb1bd7abdf"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="72e242b4-9686-509e-82d9-77cef041009a"
                        >
                          Jan 6 – Jan 10
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="acdfbdff-f044-53a1-8b8a-e00c5da07470"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="1077c684-5e54-5a84-b3eb-ca9ac4ec619c"
                        >
                          Finalize ICP, pull accounts, enrich contacts
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="db971240-b346-5e07-8541-7ba2388976ee"
                      >
                        <Badge
                          className="text-xs bg-[#009689]/15 text-[#009689] border-black/1 border-0 border-solid"
                          data-id="10af2a07-f950-5de5-ad6d-f4191a289a36"
                        >
                          Complete
                        </Badge>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="51ac9015-3df8-5370-854a-7fbcc8d32c06"
                      >
                        <span
                          className="text-sm font-medium"
                          data-id="07b2660a-6811-5f7b-962e-bcd8c387d68e"
                        >
                          Content Creation
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="b97460aa-47e2-57d2-9872-1ff5935b39bc"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="ed57a2a7-0346-59f3-b587-0088268d1cbc"
                        >
                          Jan 13 – Jan 17
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="b3c8b42b-c1d6-5303-b071-402a7c5f8d7d"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="aa1b300e-39c4-593e-9395-296595ca4a8f"
                        >
                          Write email templates, LinkedIn messages, call scripts
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="92a844f7-3b3c-5256-afc8-b57e72e0252a"
                      >
                        <Badge
                          className="text-xs bg-[#ffb900]/15 text-[#ffb900] border-black/1 border-0 border-solid"
                          data-id="200994f3-d2b9-53eb-9a17-181f239bda77"
                        >
                          In Progress
                        </Badge>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="a518659d-d6c5-5f3f-bc5e-06d656ca29ac"
                      >
                        <span
                          className="text-sm font-medium"
                          data-id="4cfb83ca-af3e-51ed-b34d-ea15d0b64fc7"
                        >
                          Warm-up &amp; Test
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="747c4363-efad-5cbf-8763-335272110eb1"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="4293bc08-12f0-5fb0-926a-757288895a87"
                        >
                          Jan 20 – Jan 24
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="2d5e1d0f-81b8-5c10-a534-50c69a50514c"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="0ff326a6-1cc8-5e98-a72d-bc223545f5c2"
                        >
                          A/B test subject lines, warm up sending domains
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="fdfce3d2-00cd-59ff-823c-a3ad5f6858cf"
                      >
                        <Badge
                          className="text-xs"
                          variant="secondary"
                          data-id="51458fd6-8c61-5301-9922-bd6e43872a29"
                        >
                          Upcoming
                        </Badge>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="85db6298-1655-5ea8-9188-2ce2bbfc45c8"
                      >
                        <span
                          className="text-sm font-medium"
                          data-id="51f1f813-9189-5935-a02b-d86b0edd0bb0"
                        >
                          Full Launch
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="d99763c1-dcb8-5fad-98e6-eea081516eaa"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="9bb3a71c-7d9d-5790-8fd1-cd0ba0de9797"
                        >
                          Jan 27 – Ongoing
                        </span>
                      </div>
                      <div
                        className="p-4 border-zinc-200 border-0 border-solid"
                        data-id="4390c992-998e-5561-9b61-1268f91a8051"
                      >
                        <span
                          className="text-sm text-[#71717b]"
                          data-id="e0692c1f-b5c6-5676-b2da-3a3a75237d84"
                        >
                          Activate all sequences, monitor daily metrics
                        </span>
                      </div>
                      <div
                        className="p-4"
                        data-id="6ea65f29-147f-5925-9d43-46a5ba7e816a"
                      >
                        <Badge
                          className="text-xs"
                          variant="secondary"
                          data-id="2ad4bffe-b981-530b-8565-665c10d9e410"
                        >
                          Upcoming
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-96 flex flex-col bg-neutral-50 border-zinc-200 border-0 border-solid"
              data-id="7a192910-0cdf-5e12-9873-1985d6c48933"
            >
              <div
                className="flex items-center justify-between p-4 border-zinc-200 border-0 border-solid"
                data-id="e933f6f9-f8b8-5727-ab10-cb38b2e5eda6"
              >
                <div
                  className="flex items-center gap-2"
                  data-id="5206b9dd-853f-53d5-b49b-da509c8637ce"
                >
                  <Sparkles
                    className="size-5 text-[#8e51ff]"
                    data-id="7daf244e-a2a1-584e-9bc6-edbc54fb4d2a"
                  />
                  <span
                    className="font-semibold text-sm"
                    data-id="22d7c429-e333-5d9e-a55b-ea17f646021b"
                  >
                    AI Assistant
                  </span>
                </div>
                <div
                  className="flex items-center gap-1"
                  data-id="a767d578-11bc-57aa-8cce-f63c1e86e5df"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    data-id="8b4abb5b-6eb2-5053-a555-324598ca33b3"
                  >
                    <RotateCcw
                      className="size-4"
                      data-id="17639862-2276-5cb9-82e9-bf4187b777db"
                    />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    data-id="49469d71-00ea-548a-9569-4f9477496405"
                  >
                    <PanelRightClose
                      className="size-4"
                      data-id="8c609f01-1644-5d05-ab5e-258092a56fb9"
                    />
                  </Button>
                </div>
              </div>
              <div
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-4"
                data-id="33b87e5e-fcfb-51f6-8804-cb3b024173fd"
              >
                <div
                  className="flex items-center gap-2 mb-2"
                  data-id="3675fbeb-028e-5100-b43b-07733efdf86f"
                >
                  <Badge
                    className="gap-1 text-xs"
                    variant="secondary"
                    data-id="498deb8a-8cda-590e-ae38-049a1bdb1cab"
                  >
                    <Cpu
                      className="size-3"
                      data-id="fb1c82d0-d0bc-5f18-8ba5-7876c3dabe51"
                    />
                    Agent Mode
                  </Badge>
                  <span
                    className="text-xs text-[#71717b]"
                    data-id="4f6796ca-9763-5277-8d50-c9ac209d5825"
                  >
                    claude-4-sonnet
                  </span>
                  <Button
                    className="ml-auto p-0 h-auto"
                    size="sm"
                    variant="ghost"
                    data-id="80dfd69c-0a96-5229-b19f-d543424d74ba"
                  >
                    <ChevronDown
                      className="size-4 text-[#71717b]"
                      data-id="2c1af17e-c08e-5584-9b6f-8388c5b65b77"
                    />
                  </Button>
                </div>
                <div
                  className="flex gap-2"
                  data-id="c956df14-ca4d-5d07-9418-0819729024f1"
                >
                  <div
                    className="flex items-center justify-center size-7 shrink-0 mt-0.5 rounded-full bg-[#8e51ff]/10"
                    data-id="250f36b9-8595-5757-8438-a16a47734164"
                  >
                    <Sparkles
                      className="size-4 text-[#8e51ff]"
                      data-id="118a2244-b3b3-5b8c-b5e4-b418d9f7a9a5"
                    />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    data-id="044e18ce-a071-53ae-97fc-e943b179cb93"
                  >
                    <p
                      className="text-sm"
                      data-id="ce97f6a8-f2f7-5747-97f4-3057a7708127"
                    >
                      I've analyzed your campaign setup. Here are some
                      suggestions:
                    </p>
                    <div
                      className="p-3 gap-2 flex flex-col rounded-lg bg-white border-zinc-200 border-0 border-solid"
                      data-id="c43e8678-1436-5984-b647-0fba00dc283a"
                    >
                      <span
                        className="text-xs font-semibold text-[#8e51ff]"
                        data-id="928715c2-9038-5eb2-9fab-e3027f2c7e39"
                      >
                        Audience Refinement
                      </span>
                      <p
                        className="text-xs text-[#71717b]"
                        data-id="a63a0e31-5e24-52a4-ac76-940f81c40e5c"
                      >
                        Consider narrowing to companies with 500-2000 employees.
                        Your conversion data shows 2.3x higher close rates in
                        this segment.
                      </p>
                    </div>
                    <div
                      className="p-3 gap-2 flex flex-col rounded-lg bg-white border-zinc-200 border-0 border-solid"
                      data-id="37aca978-36da-57cd-b501-8f0e92af310c"
                    >
                      <span
                        className="text-xs font-semibold text-[#8e51ff]"
                        data-id="5ef63ca1-754c-58c9-ad51-7642f5760aec"
                      >
                        Signal Optimization
                      </span>
                      <p
                        className="text-xs text-[#71717b]"
                        data-id="de7757e8-fef8-5887-9dd3-a35fef7dec0f"
                      >
                        The "Hiring Sales Leadership" signal has the strongest
                        correlation with deal closure. Consider weighting it
                        higher in your scoring model.
                      </p>
                    </div>
                    <div
                      className="p-3 gap-2 flex flex-col rounded-lg bg-white border-zinc-200 border-0 border-solid"
                      data-id="c95f1384-a2c2-5514-a94e-2e72e5074102"
                    >
                      <span
                        className="text-xs font-semibold text-[#f54900]"
                        data-id="d01a4741-ce61-5eab-8281-28bd8b78139c"
                      >
                        Sequence Gap
                      </span>
                      <p
                        className="text-xs text-[#71717b]"
                        data-id="590e5f0e-9842-5054-90bb-6988bf365759"
                      >
                        There's a 6-day gap between Step 4 and 5. Data suggests
                        adding a LinkedIn touchpoint on Day 11 improves reply
                        rates by 18%.
                      </p>
                    </div>
                  </div>
                </div>
                <Separator data-id="f0ab8d67-cfae-55ae-b782-6fad914ef152" />
                <div
                  className="flex gap-2"
                  data-id="158c7268-87e8-5123-84bc-7a8198098c88"
                >
                  <div
                    className="flex items-center justify-center size-7 shrink-0 mt-0.5 rounded-full bg-zinc-100"
                    data-id="18786d09-5232-55cd-bebe-418fb7bf4f86"
                  >
                    <span
                      className="text-xs font-medium"
                      data-id="d56f3f58-27fd-5f1f-9be7-67db66bda699"
                    >
                      JD
                    </span>
                  </div>
                  <div
                    className="flex flex-col gap-1"
                    data-id="b657bebf-9c5c-5ee4-b240-1e3e8e460116"
                  >
                    <p
                      className="text-sm"
                      data-id="4a32a5bb-4290-580d-aa5d-ec4b6980a45b"
                    >
                      Can you draft the first email template based on the hiring
                      signal?
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-2"
                  data-id="568ca332-6d95-56b8-a3b4-b750f2918411"
                >
                  <div
                    className="flex items-center justify-center size-7 shrink-0 mt-0.5 rounded-full bg-[#8e51ff]/10"
                    data-id="0fb1eef4-9801-59d9-9ab8-62f898cdce52"
                  >
                    <Sparkles
                      className="size-4 text-[#8e51ff]"
                      data-id="ad981d07-169d-515b-8bda-c7c169471b21"
                    />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    data-id="fb7dbea3-d5e5-549e-b371-f0378a19ff53"
                  >
                    <p
                      className="text-sm"
                      data-id="6e1d7639-3596-5253-9458-9179baf718c0"
                    >
                      Here's a draft for the hiring signal variant:
                    </p>
                    <div
                      className="p-3 rounded-lg bg-white border-zinc-200 border-0 border-solid"
                      data-id="940c9e52-c1e6-5801-8bd8-aa86633665d3"
                    >
                      <p
                        className="text-xs font-medium mb-1 text-zinc-950"
                        data-id="e8916963-6ae1-5147-ba61-408245c018dd"
                      >
                        Subject: Scaling your sales team?
                      </p>
                      <p
                        className="text-xs leading-relaxed text-[#71717b]"
                        data-id="f6a5a1d9-1a5e-5e87-81dc-715e99e69835"
                      >
                        Hi [First Name],
                        <br data-id="6002d896-3ae1-53ce-a9c3-98ec1990e749" />
                        <br data-id="c46f2a97-ba84-56c0-b996-2dc76f1c8dea" />
                        Noticed [Company] is hiring a [Role Title] — exciting
                        growth phase. When teams scale this fast, the outbound
                        engine often becomes the bottleneck.
                        <br data-id="6ac6871d-47bc-552c-8f42-c30627cf2959" />
                        <br data-id="07f95f09-3192-5620-8045-164bf2a09ff5" />
                        We helped [Similar Company] ramp 40% faster by
                        automating their signal-based prospecting. Happy to
                        share what worked.
                        <br data-id="bb299fe5-726f-5b52-92ca-b19cad2018f0" />
                        <br data-id="1ac411b8-e1de-5348-8ac0-c133dcc616e5" />
                        Worth a 15-min chat?
                      </p>
                    </div>
                    <div
                      className="flex gap-2"
                      data-id="4a79145c-fcda-574f-b29a-671158913f4f"
                    >
                      <Button
                        className="text-xs gap-1"
                        size="sm"
                        variant="outline"
                        data-id="bbdcd348-9cb6-5845-bcc3-3d5ca5c74dbf"
                      >
                        <Copy
                          className="size-3"
                          data-id="37bd9184-0f54-5d50-8e8d-d5ac075dbdd0"
                        />
                        Copy
                      </Button>
                      <Button
                        className="text-xs gap-1"
                        size="sm"
                        variant="outline"
                        data-id="a019b080-d9ad-562a-b398-b06d8e7e821a"
                      >
                        <FileInput
                          className="size-3"
                          data-id="c8c6c8a5-be47-5108-b677-def491dea126"
                        />
                        Insert
                      </Button>
                      <Button
                        className="text-xs gap-1"
                        size="sm"
                        variant="outline"
                        data-id="a8b3c208-a240-57e9-89ab-ea3c25cbba57"
                      >
                        <RefreshCw
                          className="size-3"
                          data-id="226d4a49-6614-5d12-ba53-6656da7c4a91"
                        />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p-4 border-zinc-200 border-0 border-solid"
                data-id="bf883ddb-61e5-5ba9-90b7-ac095df0adaf"
              >
                <div
                  className="flex flex-col gap-2"
                  data-id="cadcd4c1-01b8-5f16-bcdb-ffe7e7693ea8"
                >
                  <div
                    className="flex items-center gap-2 mb-1"
                    data-id="5528bb67-1fd8-5356-b763-309b72bb6d3c"
                  >
                    <Button
                      className="text-xs gap-1 p-0 h-auto text-[#71717b]"
                      size="sm"
                      variant="ghost"
                      data-id="a892ba4e-c3c6-56d3-9352-c9c751a34507"
                    >
                      <Paperclip
                        className="size-3"
                        data-id="3347d991-5aa6-5819-928b-17d97b7e894b"
                      />
                      Add context
                    </Button>
                  </div>
                  <div
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border-zinc-200 border-0 border-solid"
                    data-id="08ed0a7a-ffc1-5e17-a713-947a9d1cc2dd"
                  >
                    <Input
                      className="shadow-none text-sm p-0 h-auto focus-visible:ring-0 border-black/1 border-0 border-solid"
                      placeholder="Ask AI to help with your campaign..."
                      data-id="7da29012-ca5c-5b05-9cc0-ca135d98041a"
                    />
                    <Button
                      className="hover:bg-primary/90 shrink-0 size-8 p-0 bg-[#8e51ff] text-violet-50"
                      size="sm"
                      data-id="698190f6-2e3b-56f9-bcb7-08701b65b6de"
                    >
                      <ArrowUp
                        className="size-4"
                        data-id="c9f5d222-ef4e-58bd-8203-fe4f4facbef8"
                      />
                    </Button>
                  </div>
                  <div
                    className="flex items-center gap-4 mt-1"
                    data-id="81a96a6a-d8e8-50b2-b277-cd84d627e37e"
                  >
                    <span
                      className="text-xs text-[#71717b]"
                      data-id="12baa46e-128b-539b-8db8-3099cae2d436"
                    >
                      Past chats:
                    </span>
                    <Button
                      className="text-xs p-0 h-auto text-[#71717b]"
                      size="sm"
                      variant="link"
                      data-id="9eecd2cf-2994-5adf-9c20-7cbc2a415a8d"
                    >
                      Audience analysis
                    </Button>
                    <Button
                      className="text-xs p-0 h-auto text-[#71717b]"
                      size="sm"
                      variant="link"
                      data-id="c150186c-c440-5bed-8d2f-3527b00558f2"
                    >
                      Email variants
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
